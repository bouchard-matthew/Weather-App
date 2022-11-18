import { Container } from "@mui/material";
import { HourlyObject, Units } from "Types/types";
import { HourlyListItem } from "Components/HourlyListItem";

interface Props {
  hourly: HourlyObject[];
  units: Units;
}

const HourlyList = ({ hourly, units }: Props) => {
  return (
    <>
      {hourly.map((item, index) => {
        return (
          <Container sx={{ marginBottom: "20px" }} key={index}>
            <HourlyListItem item={item} units={units} />
          </Container>
        );
      })}
    </>
  );
};

export default HourlyList;
