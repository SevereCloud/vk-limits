import type { AppProps } from "next/app";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/cssm/styles/themes.css";

import bridge from "@vkontakte/vk-bridge";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    bridge.send("VKWebAppInit", {});
  });

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <Component {...pageProps} />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}
