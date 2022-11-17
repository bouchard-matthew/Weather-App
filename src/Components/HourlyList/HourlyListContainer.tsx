import { Container } from "@mui/material";
import React from "react";
import { useStore } from "../../Context/useAppStore";
import HourlyList from "./HourlyList";

const HourlyListContainer = () => {
  const { hourly } = useStore();

  return (
    <>
      {hourly &&
        hourly.map((item, index) => {
          return (
            <Container sx={{marginBottom: '20px'}} key={index}>
              <HourlyList {...item} />
            </Container>
          );
        })}
    </>
  );
};

export default HourlyListContainer;
