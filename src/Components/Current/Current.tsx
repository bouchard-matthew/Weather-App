import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Container, Paragraph, ResponsiveFlex } from "Design";

import type { Props } from "./Current.types";
import Image from "next/image";
import { useCapitalizeFirstLetter } from "Hooks/useCapitalizeFirstLetter";
import { ConditionsListItem } from "Components/ConditionsListItem";
import { ClientGate } from "Components/ClientGate";

dayjs.extend(utc);
dayjs.extend(timezone);

const Current = ({ current, currentTime, timeZone }: Props) => {
  const descriptionDisplayValue = useCapitalizeFirstLetter(current?.weather[0].description || "");

  return (
    <ClientGate>
      {current && (
        <Container>
          <ResponsiveFlex>
            <Paragraph variant="h4">
              Current Weather
              <Paragraph>
                {dayjs(currentTime * 1000)
                  .tz(timeZone)
                  .format("h:mm A")}
              </Paragraph>
              <Paragraph>{descriptionDisplayValue}</Paragraph>
            </Paragraph>
            <Image
              height={200}
              width={200}
              priority={true}
              alt={descriptionDisplayValue}
              src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
            />
          </ResponsiveFlex>
          <ConditionsListItem conditions={current} />
        </Container>
      )}
    </ClientGate>
  );
};

export default Current;
