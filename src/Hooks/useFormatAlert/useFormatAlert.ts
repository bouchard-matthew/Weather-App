import { useCallback } from "react";

const useFormatAlert = () => {
  return useCallback((alert: string) => {
    return alert
      .split(/[(\\*...)]+/g)
      .map((item) => (item !== "" ? `${item} <br />` : ""))
      .join("");
  }, []);
};

export default useFormatAlert;
