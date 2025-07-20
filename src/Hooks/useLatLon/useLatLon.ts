import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useEffect } from "react";

export const useLatLon = () => {
  const { lat, lon, setLat, setLon } = useAdditionalWeatherProperties();

  useEffect(() => {
    if ("geolocation" in navigator && !lat && !lon) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          console.warn(`Geolocation failed (${error.code}): ${error.message}`);
          
          // Try IP-based fallback for any error
          tryIPGeolocation();
        },
        {
          maximumAge: 60000,
          timeout: 5000,
          enableHighAccuracy: true,
        }
      );
    }
  }, [lat, lon, setLat, setLon]);

  const tryIPGeolocation = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (data.latitude && data.longitude) {
        setLat(data.latitude);
        setLon(data.longitude);
      }
    } catch (error) {
      console.warn("IP geolocation failed:", error);
    }
  };

  return { lat, lon };
};

export default useLatLon;