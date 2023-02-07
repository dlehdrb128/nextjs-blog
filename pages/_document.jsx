import { Html, Head, Main, NextScript } from "next/document";
import KakaoMapScript from "../Script/KakaoMapScript";
import Script from "next/script";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=4564fae2ce48b41c7b704690cbd04009&autoload=false`}
          strategy="beforeInteractive"
        /> */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
