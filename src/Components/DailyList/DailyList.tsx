import CircularProgress from "@mui/material/CircularProgress";
import { DailyListItem } from "Components/DailyListItem";
import { Loading } from "Design";
import { Container } from "Design";

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
            <Container elevation={6} key={idx}>
              <DailyListItem item={item} index={idx} />
            </Container>
          );
        })
      )}
    </>
  );
};

export default DailyList;
