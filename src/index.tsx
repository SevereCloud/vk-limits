import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import bridge from '@vkontakte/vk-bridge';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';

const isMobileApps = () => {
  const url = new URL(window.location.href);
  const vkPlatform = url.searchParams.get('vk_platform');
  return vkPlatform !== null && vkPlatform !== 'desktop_web';
};

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <App vkAPI={new VKMiniAppAPI(bridge)} mobile={isMobileApps()} />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
