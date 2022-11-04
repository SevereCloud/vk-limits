import {
  PanelHeader,
  Platform,
  SplitCol,
  SplitLayout,
  usePlatform,
} from "@vkontakte/vkui";
import React from "react";
import Head from "next/head";
import { Main } from "../lib/panels/Main";

export default function Home() {
  const platform = usePlatform();

  return (
    <SplitLayout
      style={{ justifyContent: "center" }}
      header={platform !== Platform.VKCOM && <PanelHeader />}
    >
      <SplitCol maxWidth="768px">
        <Head>
          <title>VK Limits</title>
        </Head>
        <Main id="main" />
      </SplitCol>
    </SplitLayout>
  );
}
