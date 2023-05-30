import { HourlyListItem } from "Components/HourlyListItem";
import { Container } from "Design";
import { Props } from "./HourlyList.types";

const HourlyList = ({ hourly }: Props) => {
  return (
    <>
      {hourly.map((item) => {
        return (
          <Container key={item.dt}>
            <HourlyListItem item={item} />
          </Container>
        );
      })}
    </>
  );
};

export default HourlyList;
