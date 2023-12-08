import type { AppProps } from "next/app";
import {
  AdaptivityProvider,
  AppRoot,
  Appearance,
  ConfigProvider,
} from "@vkontakte/vkui";
import bridge, {
  parseURLSearchParamsForGetLaunchParams,
} from "@vkontakte/vk-bridge";
import {
  useAppearance,
  useInsets,
  useAdaptivity,
} from "@vkontakte/vk-bridge-react";
import "@vkontakte/vkui/dist/cssm/styles/themes.css";

import React from "react";
import { transformVKBridgeAdaptivity } from "./transformVKBridgeAdaptivity";

export default function App({ Component, pageProps }: AppProps) {
  const vkBridgeAppearance = useAppearance() || Appearance.LIGHT; // Вместо undefined можно задать значение по умолчанию
  const vkBridgeInsets = useInsets() || undefined; // Вместо undefined можно задать значение по умолчанию
  const vkBridgeAdaptivityProps = transformVKBridgeAdaptivity(useAdaptivity()); // Конвертируем значения из VK Bridge в параметры AdaptivityProvider
  const [vk_platform, setPlatform] = React.useState<string | undefined>(
    undefined
  );

  React.useEffect(() => {
    bridge.send("VKWebAppInit", {});
    const params = parseURLSearchParamsForGetLaunchParams(
      window.location.search
    );

    setPlatform(params.vk_platform);
  }, []);

  return (
    <ConfigProvider
      appearance={vkBridgeAppearance}
      platform={vk_platform === "desktop_web" ? "vkcom" : undefined}
      isWebView={bridge.isWebView()}
      hasCustomPanelHeaderAfter={true} // Резервируем правую часть PanelHeader под кнопки управления VK Mini Apps. Через параметр customPanelHeaderAfterMinWidth можно регулировать ширину этой области (по умолчанию, используется 90)
    >
      <AdaptivityProvider {...vkBridgeAdaptivityProps}>
        {/* Для VK Mini Apps рекомендуем использовать mode="full" (выставлен по умолчанию, для примера указан явно) */}
        <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
          <Component {...pageProps} />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}
