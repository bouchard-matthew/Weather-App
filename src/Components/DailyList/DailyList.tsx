import { DailyListItem } from "Components/DailyListItem";
import { Container } from "Design";

import type { Props } from "./DailyList.types";
import { ClientGate } from "Components/ClientGate";

const DailyList = ({ daily }: Props) => {
  return (
    <ClientGate>
      {daily &&
        daily.map((item, idx) => {
          return (
            <Container key={item.dt}>
              <DailyListItem item={item} index={idx} />
            </Container>
          );
        })}
    </ClientGate>
  );
};

export default DailyList;
