import { Group, Header } from "@vkontakte/vkui";
import { DataGroup } from "../../../data";
import { Item } from "../Item/Item";

export interface GroupItemsProps extends DataGroup {}

export function GroupItems({ name, items, color }: GroupItemsProps) {
  return (
    <Group>
      <>
        <Header>{name}</Header>

        {items.map((item) => (
          <Item key={item.name + (item.hint ?? "")} fill={color} {...item} />
        ))}
      </>
    </Group>
  );
}
