import { Box, Typography } from "@mui/material";
import { HourlyObject } from "../../Types/types";
import { styled } from '@mui/material/styles';
import { capitalizeFirstLetter } from "../Utils/stringFunctions";
import moment from "moment";
import { useStore } from "../../Context/useAppStore";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
//
import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HourlyListItem = styled('div')(() => ({
  display: 'flex',
  "& p, & svg": {
    margin: 'auto 0'
  },
}));

const HourlyList = (item: HourlyObject) => {
  const { units } = useStore();
  return (
    <>
    {moment(item.dt * 1000).format("hha") == "12am" && (
        <Box sx={{ background: "lightgrey", padding: "15px 10px", textAlign: "center" }}>{moment(item.dt * 1000).format("dddd, MMMM Do")}</Box>
      )}
      <Accordion sx={{border: '1px solid black'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box sx={{ width: '100%', display: "flex", justifyContent: "space-evenly" }}>
            <HourlyListItem><Typography>{moment(item.dt*1000).format("hh:MM A")}</Typography></HourlyListItem>
            <HourlyListItem><Typography>{Math.round(item.temp)}° {returnUnitTemperature(units)}</Typography></HourlyListItem>
            <HourlyListItem><Typography sx={{margin: 'auto 0'}}>{capitalizeFirstLetter(item.weather[0].description)}</Typography> <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} /></HourlyListItem>
            <HourlyListItem><OpacityIcon style={{color: "blue"}} /><Typography>{item.pop * 100}%</Typography></HourlyListItem>
            <HourlyListItem><AirIcon style={{color: "blue"}}/> <Typography>{Math.round(item.wind_speed)} {returnUnitSpeed(units)}</Typography></HourlyListItem>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
</>

    // <>
      // {moment(item.dt * 1000).format("hha") == "12am" && (
      //   <Box sx={{ background: "lightgrey", padding: "15px 10px", textAlign: "center" }}>{moment(item.dt * 1000).format("dddd, MMMM Do")}</Box>
      // )}
      // <Box sx={{ display: "flex", justifyContent: "space-evenly", border: "1px solid lightgray" }}>
      //   <HourlyListItem><Typography>{moment(item.dt*1000).format("hh:MM A")}</Typography></HourlyListItem>
      //   <HourlyListItem><Typography>{Math.round(item.temp)}° {returnUnitTemperature(units)}</Typography></HourlyListItem>
      //   <HourlyListItem><Typography sx={{margin: 'auto 0'}}>{capitalizeFirstLetter(item.weather[0].description)}</Typography> <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} /></HourlyListItem>
      //   <HourlyListItem><OpacityIcon /><Typography>{item.pop * 100}%</Typography></HourlyListItem>
      //   <HourlyListItem><AirIcon /> <Typography>{Math.round(item.wind_speed)} {returnUnitSpeed(units)}</Typography></HourlyListItem>
      // </Box>
    // </>
  );
};

const returnUnitSpeed = (unit: number): string => {
  switch (unit) {
    case 0:
      return "mph";
    default:
      return "kph";
  }
};

const returnUnitTemperature = (unit: number): string => {
  switch (unit) {
    case 0:
      return "F";
    default:
      return "C";
  }
};

export default HourlyList;
