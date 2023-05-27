import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useCurrentPath = () => {
  const location = usePathname();

  return useMemo(() => location, [location]);
};

export default useCurrentPath;
