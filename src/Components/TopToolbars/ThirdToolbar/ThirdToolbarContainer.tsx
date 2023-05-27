import { usePathname } from "next/navigation";
import ThirdToolbar from "./ThirdToolbar";

const ThirdToolbarContainer = () => {
  let location = usePathname();
  return <ThirdToolbar path={location} />;
};

export default ThirdToolbarContainer;
