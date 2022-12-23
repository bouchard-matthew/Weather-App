import { Container } from "@mui/material";
import { Current, Units } from "Types/types";
import { HourlyListItem } from "Components/HourlyListItem";

interface Props {
  hourly: Current[];
  units: Units;
  loading: Boolean;
}

const HourlyList = ({ hourly, units, loading }: Props) => {
  return (
    <>
      {!loading &&
        hourly.map((item, index) => {
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
