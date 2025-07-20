import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useEffect, useRef } from "react";

export const useLatLon = () => {
  const { lat, lon, setLat, setLon } = useAdditionalWeatherProperties();
  const attemptedRef = useRef(false);

  useEffect(() => {
    // Only run once and if we don't have coordinates
    if (attemptedRef.current || (lat && lon)) return;
    attemptedRef.current = true;

    console.log("Starting geolocation attempt...");
    
    tryIPGeolocation();

    // Optionally, you can still try browser geolocation as a backup:
    tryBrowserGeolocation();
    
  }, [lat, lon, setLat, setLon]);

  const tryBrowserGeolocation = () => {
    if (!("geolocation" in navigator)) {
      console.warn("Geolocation not supported");
      tryIPGeolocation();
      return;
    }

    console.log("Trying browser geolocation...");
    
    const timeoutId = setTimeout(() => {
      console.warn("Browser geolocation timed out, trying IP fallback");
      tryIPGeolocation();
    }, 8000);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        clearTimeout(timeoutId);
        console.log("Browser geolocation success:", position.coords);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (error) => {
        clearTimeout(timeoutId);
        console.warn(`Browser geolocation failed (${error.code}): ${error.message}`);
        tryIPGeolocation();
      },
      {
        maximumAge: 300000, // 5 minutes
        timeout: 7000,
        enableHighAccuracy: false
      }
    );
  };

  const tryIPGeolocation = async () => {
    console.log("Trying IP-based geolocation...");
    
    // Multiple services with different approaches
    const services = [
      // Service 1: ip-api.com (no rate limits, reliable)
      async () => {
        const response = await fetch('http://ip-api.com/json/?fields=status,lat,lon', {
          signal: AbortSignal.timeout(5000)
        });
        const data = await response.json();
        if (data.status === 'success') {
          return { lat: data.lat, lon: data.lon, service: 'ip-api.com' };
        }
        throw new Error('Invalid response');
      },
      
      // Service 2: ipapi.co (HTTPS, good fallback)
      async () => {
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(5000)
        });
        const data = await response.json();
        if (data.latitude && data.longitude) {
          return { lat: data.latitude, lon: data.longitude, service: 'ipapi.co' };
        }
        throw new Error('Invalid response');
      },

      // Service 4: Fallback to a major city if all else fails
      async () => {
        // Simulate a small delay
        await new Promise(resolve => setTimeout(resolve, 100));
        return { lat: 40.7128, lon: -74.0060, service: 'default-nyc' };
      }
    ];

    for (let i = 0; i < services.length; i++) {
      try {
        console.log(`Trying IP service ${i + 1}...`);
        const result = await services[i]();
        
        if (result && result.lat && result.lon) {
          console.log(`IP geolocation success via ${result.service}:`, { lat: result.lat, lon: result.lon });
          setLat(result.lat);
          setLon(result.lon);
          return;
        }
      } catch (error) {
        console.warn(`IP service ${i + 1} failed:`, error);
        if (i === services.length - 1) {
          console.error("All geolocation methods failed");
        }
      }
    }
  };

  return { lat, lon };
};

export default useLatLon;