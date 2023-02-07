import { useEffect, useState } from "react";
import "../styles/Home.module.css";

const useKakao = (mapContainer) => {
  const [kakao, setKakao] = useState(null);
  const [map, setMap] = useState(null);
  const [services, setServices] = useState(null);

  const putMarker = (lat, long) => {
    if (!map || !kakao) return;
    const markerPosition = new kakao.maps.LatLng(lat, long);
    const marker = new kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);
    kakao.maps.event.addListener(marker, "click", () => {
      // 마커 위에 인포윈도우를 표시합니다
      handleClock();
      console.log("너 나 클릭했음..");
      //
    });
  };

  useEffect(() => {
    if (!mapContainer) return;

    console.log(window, "입니다!");

    const { kakao } = window;
    if (!kakao) return;

    kakao.maps.load(() => {
      console.log(mapContainer, "실행 주기!");

      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      setMap(new window.kakao.maps.Map(mapContainer, mapOption));
      setKakao(window.kakao);
      setServices(window.kakao.maps.services);
    });
  }, [mapContainer]);

  return { kakao, map, services, putMarker };
};

export default useKakao;
