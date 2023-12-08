import {
  type AdaptivityProps,
  getViewWidthByViewportWidth,
  getViewHeightByViewportHeight,
  ViewWidth,
} from "@vkontakte/vkui";
import type { UseAdaptivity } from "@vkontakte/vk-bridge-react";

/**
 * Требуется конвертировать данные из VK Bridge в те, что принимает AdaptivityProvider из VKUI.
 */
export const transformVKBridgeAdaptivity = ({
  type,
  viewportWidth,
  viewportHeight,
}: UseAdaptivity): AdaptivityProps => {
  switch (type) {
    case "adaptive":
      return {
        viewWidth: getViewWidthByViewportWidth(viewportWidth),
        viewHeight: getViewHeightByViewportHeight(viewportHeight),
      };
    case "force_mobile":
    case "force_mobile_compact":
      return {
        viewWidth: ViewWidth.MOBILE,
        sizeX: "compact",
        sizeY: type === "force_mobile_compact" ? "compact" : "regular",
      };
    default:
      return {};
  }
};
