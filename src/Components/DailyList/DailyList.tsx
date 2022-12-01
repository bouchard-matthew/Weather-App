import { Container } from "@mui/material";
import { DailyListItem } from "Components/DailyListItem";
import React from "react";

import { Props } from "./DailyList.types";

const DailyList = ({ daily, units }: Props) => {
  return (
    <>
      {daily.map((item, idx) => {
        return (
          <Container>
            <DailyListItem item={item} units={units} index={idx} />
          </Container>
        );
      })}
    </>
  );
};

export default DailyList;
