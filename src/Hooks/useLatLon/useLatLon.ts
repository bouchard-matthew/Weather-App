import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useEffect } from "react";

export const useLatLon = () => {
  const { lat, lon, setLat, setLon } = useAdditionalWeatherProperties();

  useEffect(() => {
    if ("geolocation" in navigator && !lat && !lon) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        function (error) {
          console.log(error);
        },
        {
          maximumAge: 60000,
          timeout: 5000,
          enableHighAccuracy: true,
        }
      );
    }
  }, [lat, lon, setLat, setLon]);
  return;
};

export default useLatLon;
