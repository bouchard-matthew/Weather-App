import { Container } from "@mui/material";
import { DailyListItem } from "Components/DailyListItem";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { Props } from "./DailyList.types";
import { Loading } from "Design";

const DailyList = ({ daily, units, loading }: Props) => {
  return (
    <>
      {loading ? (
        <Loading>
          <CircularProgress />
        </Loading>
      ) : (
        daily.map((item, idx) => {
          return (
            <Container sx={{ marginBottom: "20px", marginTop: "20px" }} key={idx}>
              <DailyListItem item={item} units={units} index={idx} />
            </Container>
          );
        })
      )}
    </>
  );
};

export default DailyList;
