import { Container } from "@mui/material";
import { DailyListItem } from "Components/DailyListItem";
import React from "react";

import { Props } from "./DailyList.types";

const DailyList = ({ daily, units }: Props) => {
  return (
    <>
      {daily.map((item, idx) => {
        return (
          <Container sx={{ marginBottom: "20px", marginTop: "20px" }} key={idx}>
            <DailyListItem item={item} units={units} index={idx} />
          </Container>
        );
      })}
    </>
  );
};

export default DailyList;
