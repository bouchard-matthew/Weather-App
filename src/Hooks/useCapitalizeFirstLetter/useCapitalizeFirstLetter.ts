import { useMemo } from "react";

export const useCapitalizeFirstLetter = (string: string): string => {
  let splitString = string.split(" ");

  return useMemo(() => splitString.map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(" "), [splitString]);
};

export default useCapitalizeFirstLetter;
