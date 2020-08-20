import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import bridge from '@vkontakte/vk-bridge';

const isMobileApps = () => {
  const url = new URL(window.location.href);
  const vkPlatform = url.searchParams.get('vk_platform');
  return vkPlatform !== null && vkPlatform !== 'desktop_web';
};

ReactDOM.render(
  <React.StrictMode>
    <App vkAPI={new VKMiniAppAPI(bridge)} mobile={isMobileApps()} />
  </React.StrictMode>,
  document.getElementById('root'),
);
