import { DailyListItem } from "Components/DailyListItem";
import { Container } from "Design";

import type { Props } from "./DailyList.types";

const DailyList = ({ daily }: Props) => {
  return (
    <>
      {daily &&
        daily.map((item, idx) => {
          return (
            <Container key={idx}>
              <DailyListItem item={item} index={idx} />
            </Container>
          );
        })}
    </>
  );
};

export default DailyList;
