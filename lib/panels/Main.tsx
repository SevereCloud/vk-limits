import {
  Footer,
  Group,
  Link,
  Panel,
  PanelHeader,
  PanelProps,
  Search,
  SearchProps,
} from "@vkontakte/vkui";
import React from "react";
import { GroupItems } from "../components/GroupItems/GroupItems";
import { data, DataGroup, DataItem } from "../../data";

interface UseData {
  dataGroups: DataGroup[];
  searchProps: SearchProps;
}

function useData(): UseData {
  const [value, setValue] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const dataGroups = React.useMemo(() => {
    if (!value) {
      return data;
    }

    const valueLowerCase = value.toLowerCase();
    const groups: DataGroup[] = [];

    data.forEach((group) => {
      if (group.name.toLowerCase().indexOf(valueLowerCase) > -1) {
        groups.push(group);
      } else {
        const items: DataItem[] = [];
        group.items.forEach((item) => {
          if (
            item.name.toLowerCase().indexOf(valueLowerCase) > -1 ||
            item.text.toLowerCase().indexOf(valueLowerCase) > -1 ||
            (item.hint && item.hint.toLowerCase().indexOf(valueLowerCase) > -1)
          ) {
            items.push(item);
          }
        });

        if (items.length > 0) {
          groups.push({
            name: group.name,
            color: group.color,
            items: items,
          });
        }
      }
    });

    return groups;
  }, [value]);

  return { dataGroups, searchProps: { value, onChange } };
}

export interface MainProps extends PanelProps {}

export function Main({ ...restProps }: MainProps) {
  const { dataGroups, searchProps } = useData();

  return (
    <Panel {...restProps}>
      <PanelHeader>Лимиты</PanelHeader>

      <Group>
        <Search data-testid="search" {...searchProps} />
      </Group>

      {dataGroups.map((group) => (
        <GroupItems key={group.name} {...group} />
      ))}

      {!dataGroups.length && (
        <Group>
          <Footer data-testid="not-found">Ничего не найдено</Footer>
        </Group>
      )}

      <Footer>
        <Link
          href="https://github.com/SevereCloud/vk-limits/edit/master/data.ts"
          target="_blank"
        >
          Редактировать
        </Link>
      </Footer>
    </Panel>
  );
}
