import AlertItemContainer from "Components/AlertItem/AlertItemContainer";
import { Container, Flex } from "Design";
import type { Props } from "./AlertPage.types";

const AlertPage = ({ alerts }: Props) => {
  return (
    <Flex flexDirection="column">
      {alerts?.map((alert, idx) => {
        return (
          <Container key={alert.event} elevation={8}>
            <AlertItemContainer index={idx} alert={alert} />
          </Container>
        );
      })}
    </Flex>
  );
};

export default AlertPage;
