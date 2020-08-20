import React from '../web_modules/react.js';
import { Panel, PanelHeader, Header, Group, Search, PanelHeaderButton, SimpleCell, Footer } from '../web_modules/@vkontakte/vkui.js';
import '../web_modules/@vkontakte/vkui/dist/vkui.css.proxy.js';
import { data } from './data.js';
import Icon28MoonOutline from '../web_modules/@vkontakte/icons/dist/28/moon_outline.js';
import IconGitHub from './icons/IconGitHub.js';
export class App extends React.Component {
  constructor(props) {
    super(props); // TODO: хранить схему в локальном хранилище, чтобы восстанавливать тему
    // TODO: проверка темной темы у браузера

    this.state = {
      scheme: 'bright_light',
      search: ''
    };
    this.onChange = this.onChange.bind(this);
    this.changeScheme = this.changeScheme.bind(this);
  }

  componentDidMount() {
    this.props.vkAPI.onUpdateConfig(data => {
      const schemeAttribute = document.createAttribute('scheme');
      schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
      this.setState({
        scheme: data.scheme
      });
      document.body.attributes.setNamedItem(schemeAttribute);
    });
    this.props.vkAPI.initApp();
  }

  onChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  get limits() {
    const search = this.state.search.toLowerCase();
    const groups = [];
    data.forEach(group => {
      if (group.name.toLowerCase().indexOf(search) > -1) {
        groups.push(group);
      } else {
        const items = [];
        group.items.forEach(item => {
          if (item.name.toLowerCase().indexOf(search) > -1 || item.text.toLowerCase().indexOf(search) > -1 || item.hint && item.hint.toLowerCase().indexOf(search) > -1) {
            items.push(item);
          }
        });

        if (items.length > 0) {
          groups.push({
            name: group.name,
            color: group.color,
            items: items
          });
        }
      }
    });
    return groups;
  }
  /**
   * Меняет цветовую схему
   */


  changeScheme() {
    const scheme = this.state.scheme === 'bright_light' ? 'space_gray' : 'bright_light';
    const schemeAttribute = document.createAttribute('scheme');
    schemeAttribute.value = scheme;
    document.body.attributes.setNamedItem(schemeAttribute);
    this.setState({
      scheme: scheme
    }); // TODO: хранить схему в локальном хранилище, чтобы восстанавливать тему
    // TODO: проверка темной темы у браузера
  }

  render() {
    return /*#__PURE__*/React.createElement(Panel, {
      id: "main"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      left: this.props.mobile ? /*#__PURE__*/React.createElement(PanelHeaderButton, {
        target: "_blank",
        href: "https://github.com/SevereCloud/vk-limits"
      }, /*#__PURE__*/React.createElement(IconGitHub, null)) : /*#__PURE__*/React.createElement(PanelHeaderButton, {
        onClick: () => {
          this.changeScheme();
        },
        style: {
          cursor: 'pointer'
        }
      }, /*#__PURE__*/React.createElement(Icon28MoonOutline, {
        width: 24,
        height: 24
      })),
      right: !this.props.mobile && /*#__PURE__*/React.createElement(PanelHeaderButton, {
        target: "_blank",
        href: "https://github.com/SevereCloud/vk-limits"
      }, /*#__PURE__*/React.createElement(IconGitHub, null))
    }, "\u041B\u0438\u043C\u0438\u0442\u044B"), /*#__PURE__*/React.createElement(Search, {
      value: this.state.search,
      onChange: this.onChange,
      after: null
    }), this.limits.map((group, groupIndex) => /*#__PURE__*/React.createElement(Group, {
      key: groupIndex,
      header: /*#__PURE__*/React.createElement(Header, {
        mode: "secondary"
      }, group.name)
    }, group.items.map((item, itemIndex) => /*#__PURE__*/React.createElement(SimpleCell, {
      key: itemIndex,
      multiline: true,
      before: /*#__PURE__*/React.createElement(item.icon, {
        fill: group.color,
        width: 28,
        height: 28
      }),
      description: item.text,
      href: item.link,
      target: "_blank"
    }, item.name, item.hint && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text_secondary)'
      }
    }, ' ' + item.hint))))), /*#__PURE__*/React.createElement(Footer, null));
  }

}