import React from 'react';
import {
  Panel,
  PanelHeader,
  Header,
  Group,
  Search,
  PanelHeaderButton,
  SimpleCell,
  Footer,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { data, DataGroup, DataItem } from './data';
import Icon28MoonOutline from '@vkontakte/icons/dist/28/moon_outline';
import IconGitHub from './icons/IconGitHub';
import type { AppearanceSchemeType } from '@vkontakte/vk-bridge';

interface AppState {
  activeView: string;
  activePanel: string;
  scheme: AppearanceSchemeType;
  search: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppProps {}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    // TODO: хранить схему в локальном хранилище, чтобы восстанавливать тему
    // TODO: проверка темной темы у браузера
    this.state = {
      activeView: 'main',
      activePanel: 'main',
      scheme: 'bright_light',
      search: '',
    };
    this.onChange = this.onChange.bind(this);
    this.changeScheme = this.changeScheme.bind(this);
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ search: e.target.value });
  }

  get limits(): DataGroup[] {
    const search = this.state.search.toLowerCase();
    const groups: DataGroup[] = [];
    data.forEach((group) => {
      if (group.name.toLowerCase().indexOf(search) > -1) {
        groups.push(group);
      } else {
        const items: DataItem[] = [];
        group.items.forEach((item) => {
          if (
            item.name.toLowerCase().indexOf(search) > -1 ||
            item.text.toLowerCase().indexOf(search) > -1 ||
            (item.hint && item.hint.toLowerCase().indexOf(search) > -1)
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
  }

  /**
   * Меняет цветовую схему
   */
  changeScheme(): void {
    const scheme =
      this.state.scheme === 'bright_light' ? 'space_gray' : 'bright_light';

    const schemeAttribute = document.createAttribute('scheme');
    schemeAttribute.value = scheme;
    document.body.attributes.setNamedItem(schemeAttribute);

    this.setState({
      scheme: scheme,
    });
    // TODO: хранить схему в локальном хранилище, чтобы восстанавливать тему
    // TODO: проверка темной темы у браузера
  }

  render(): JSX.Element {
    return (
      <Panel id="main">
        <PanelHeader
          left={
            <PanelHeaderButton
              onClick={() => {
                this.changeScheme();
              }}
              style={{ cursor: 'pointer' }}
            >
              <Icon28MoonOutline width={24} height={24} />
            </PanelHeaderButton>
          }
          right={
            <PanelHeaderButton
              target="_blank"
              href="https://github.com/SevereCloud/vk-limits"
            >
              <IconGitHub />
            </PanelHeaderButton>
          }
        >
          Лимиты
        </PanelHeader>
        <Search
          value={this.state.search}
          onChange={this.onChange}
          after={null}
        />

        {this.limits.map((group, groupIndex) => (
          <Group
            key={groupIndex}
            header={<Header mode="secondary">{group.name}</Header>}
          >
            {group.items.map((item, itemIndex) => (
              <SimpleCell
                key={itemIndex}
                multiline
                before={<item.icon fill={group.color} />}
                description={item.text}
                href={item.link}
                target="_blank"
              >
                {item.name}
                {item.hint && (
                  <span style={{ color: 'var(--text_secondary)' }}>
                    {' ' + item.hint}
                  </span>
                )}
              </SimpleCell>
            ))}
          </Group>
        ))}
        <Footer></Footer>
      </Panel>
    );
  }
}
