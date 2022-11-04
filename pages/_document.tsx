import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru" className="vkui">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <body className="vkui--sizeX-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
