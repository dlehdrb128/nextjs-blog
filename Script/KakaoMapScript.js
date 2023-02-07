import Script from "next/script";

export default function KakaoMapScript() {
  console.log("실행!");
  return (
    <>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=4564fae2ce48b41c7b704690cbd04009&autoload=false`}
        strategy="beforeInteractive"
      />
    </>
  );
}
