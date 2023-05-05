import { useMemo } from "react";
import { matchRoutes, useLocation } from "react-router-dom";

const routes = [{ path: "/" }, { path: "/daily" }, { path: "/hourly" }];

const useCurrentPath = () => {
  const location = useLocation();

  return useMemo(() => {
    const path = matchRoutes(routes, location);
    if (path) {
      return path[0].route.path;
    }
  }, [location]);
};

export default useCurrentPath;
