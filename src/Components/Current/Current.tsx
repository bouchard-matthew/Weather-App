import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { Loading } from "Design";
import type { Props } from "./Current.types";

const Current = ({ loading, toggle, setToggle, current, name }: Props) => {
  return (
    <>
      {loading ? (
        <Loading>
          <CircularProgress />
        </Loading>
      ) : (
        current && <Box></Box>
      )}
    </>
  );
};

export default Current;
