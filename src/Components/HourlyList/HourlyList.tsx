import { Container } from "@mui/material";
import { HourlyListItem } from "Components/HourlyListItem";
import { Props } from "./HourlyList.types";

const HourlyList = ({ hourly, loading }: Props) => {
  return (
    <>
      {!loading &&
        hourly.map((item, index) => {
          return (
            <Container sx={{ marginBottom: "20px" }} key={index}>
              <HourlyListItem item={item} />
            </Container>
          );
        })}
    </>
  );
};

export default HourlyList;
