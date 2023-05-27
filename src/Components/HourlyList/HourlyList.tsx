import { HourlyListItem } from "Components/HourlyListItem";
import { Container } from "Design";
import { Props } from "./HourlyList.types";

const HourlyList = ({ hourly }: Props) => {
  return (
    <>
      {hourly.map((item, index) => {
        return (
          <Container key={index}>
            <HourlyListItem item={item} />
          </Container>
        );
      })}
    </>
  );
};

export default HourlyList;
