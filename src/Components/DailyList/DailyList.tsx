import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { DailyListItem } from "Components/DailyListItem";
import { Loading } from "Design";

import type { Props } from "./DailyList.types";

const DailyList = ({ daily, loading }: Props) => {
  return (
    <>
      {loading ? (
        <Loading>
          <CircularProgress />
        </Loading>
      ) : (
        daily.map((item, idx) => {
          return (
            <Box sx={{ margin: "20px 0px" }} key={idx}>
              <DailyListItem item={item} index={idx} />
            </Box>
          );
        })
      )}
    </>
  );
};

export default DailyList;
