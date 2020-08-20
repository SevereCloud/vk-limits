import React from '../web_modules/react.js';
import ReactDOM from '../web_modules/react-dom.js';
import { App } from './App.js';
import { VKMiniAppAPI } from '../web_modules/@vkontakte/vk-mini-apps-api.js';

const isMobileApps = () => {
  const url = new URL(window.location.href);
  const vkPlatform = url.searchParams.get('vk_platform');
  return vkPlatform !== null && vkPlatform !== 'desktop_web';
};

ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, {
  vkAPI: new VKMiniAppAPI(),
  mobile: isMobileApps()
})), document.getElementById('root'));