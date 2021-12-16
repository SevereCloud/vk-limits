import React from 'react';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  Panel,
  PanelHeader,
  Header,
  Group,
  Search,
  PanelHeaderButton,
  SimpleCell,
  Footer,
  withAdaptivity,
  View,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { data, DataGroup, DataItem } from './data';
import Icon28MoonOutline from '@vkontakte/icons/dist/28/moon_outline';
import IconGitHub from './icons/IconGitHub';
import type {
  AppearanceSchemeType,
  UpdateConfigData,
} from '@vkontakte/vk-bridge';
import type { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';

interface AppState {
  scheme: AppearanceSchemeType;
  search: string;
}

interface AppProps {
  vkAPI: VKMiniAppAPI;
  mobile: boolean;
  viewWidth?: ViewWidth;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    // TODO: хранить схему в локальном хранилище, чтобы восстанавливать тему
    // TODO: проверка темной темы у браузера
    this.state = {
      scheme: 'bright_light',
      search: '',
    };

    this.onChange = this.onChange.bind(this);
    this.changeScheme = this.changeScheme.bind(this);
  }

  componentDidMount(): void {
    this.props.vkAPI.onUpdateConfig((data: UpdateConfigData) => {
      const schemeAttribute = document.createAttribute('scheme');
      schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
      this.setState({ scheme: data.scheme });
      document.body.attributes.setNamedItem(schemeAttribute);
    });

    this.props.vkAPI.initApp();
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
    const { viewWidth } = this.props;

    const isDesktop = viewWidth && viewWidth >= ViewWidth.TABLET;

    const navigation = (
      <Panel id="nav">
        <PanelHeader />
        <Group>
          {this.limits.map((group, groupIndex) => (
            <SimpleCell key={groupIndex} href={`#${group.name}`}>
              {group.name}
            </SimpleCell>
          ))}
        </Group>
      </Panel>
    );

    return (
      <AppRoot>
        <SplitLayout
          header={<PanelHeader separator={false} />}
          style={{ justifyContent: 'center' }}
        >
          {isDesktop && (
            <SplitCol fixed width={280} maxWidth={280}>
              {navigation}
            </SplitCol>
          )}
          <SplitCol
            spaced={isDesktop}
            animate={!isDesktop}
            width={isDesktop ? '560px' : '100%'}
            maxWidth={isDesktop ? '560px' : '100%'}
          >
            <View activePanel="main">
              <Panel id="main">
                <PanelHeader
                  left={
                    this.props.mobile ? (
                      <PanelHeaderButton
                        target="_blank"
                        href="https://github.com/SevereCloud/vk-limits"
                      >
                        <IconGitHub />
                      </PanelHeaderButton>
                    ) : (
                      <PanelHeaderButton
                        onClick={() => {
                          this.changeScheme();
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <Icon28MoonOutline width={24} height={24} />
                      </PanelHeaderButton>
                    )
                  }
                  right={
                    !this.props.mobile && (
                      <PanelHeaderButton
                        target="_blank"
                        href="https://github.com/SevereCloud/vk-limits"
                      >
                        <IconGitHub />
                      </PanelHeaderButton>
                    )
                  }
                >
                  Лимиты
                </PanelHeader>
                <Group>
                  <Search
                    value={this.state.search}
                    onChange={this.onChange}
                    after={null}
                  />
                </Group>

                {this.limits.map((group, groupIndex) => (
                  <Group
                    key={groupIndex}
                    header={<Header mode="secondary">{group.name}</Header>}
                  >
                    <a
                      id={group.name}
                      style={{
                        display: 'block',
                        top: -112,
                        position: 'relative',
                      }}
                    ></a>
                    {group.items.map((item, itemIndex) => (
                      <SimpleCell
                        key={itemIndex}
                        multiline
                        before={
                          <item.icon
                            fill={group.color}
                            width={28}
                            height={28}
                          />
                        }
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
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    );
  }
}

export default withAdaptivity(App, { viewWidth: true });
