import { HourlyListItem } from "Components/HourlyListItem";
import { Container } from "Design";
import { Props } from "./HourlyList.types";

const HourlyList = ({ hourly, loading }: Props) => {
  return (
    <>
      {!loading &&
        hourly.map((item, index) => {
          return (
            <Container elevation={6} key={index}>
              <HourlyListItem item={item} />
            </Container>
          );
        })}
    </>
  );
};

export default HourlyList;
