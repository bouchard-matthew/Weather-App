import { HourlyListItem } from "Components/HourlyListItem";
import { Container } from "Design";
import { Props } from "./HourlyList.types";
import { ClientGate } from "Components/ClientGate";

const HourlyList = ({ hourly }: Props) => {
  return (
    <ClientGate>
      {hourly.map((item) => {
        return (
          <Container key={item.dt}>
            <HourlyListItem item={item} />
          </Container>
        );
      })}
    </ClientGate>
  );
};

export default HourlyList;
