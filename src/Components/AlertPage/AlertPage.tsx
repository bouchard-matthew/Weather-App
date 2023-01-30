import AlertItemContainer from "Components/AlertItem/AlertItemContainer";
import React from "react";
import { Flex } from "Design";
import { Props } from "./AlertPage.types";

const AlertPage = ({ alerts }: Props) => {
  return (
    <Flex flexDirection="column">
      {alerts?.map((alert, idx) => {
        return <AlertItemContainer index={idx} alert={alert} />;
      })}
    </Flex>
  );
};

export default AlertPage;
