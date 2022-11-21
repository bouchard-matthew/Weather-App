import { Toolbar, Typography, Grid } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Container } from "@mui/system";
import { Weather } from "Types/types";
require("../Header.css");

type Props = {
  weatherArray: Weather[];
  setWeather: (data: Weather) => void;
  deleteAtIndex: (index: number) => void;
};

const SecondToolbar = ({ weatherArray, setWeather, deleteAtIndex }: Props) => {
  return (
    <Toolbar sx={{ backgroundColor: "#6495ED" }}>
      <Container maxWidth="md">
        <Grid container className={"weather"} sx={{ textAlign: "center" }}>
          {weatherArray.map((item, idx) => {
            return (
              <Grid
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                  "& svg": {
                    display: "none",
                    transform: "scale(0.7)",
                  },
                  "&:hover svg": {
                    display: "inline",
                  },
                  "&:hover svg:hover": {
                    color: "red",
                  },
                }}
                key={idx}
                item
                xs={4}
              >
                <img alt="img1" src={`http://openweathermap.org/img/wn/${item.current.weather[0].icon}.png`} onClick={() => setWeather(item)} />
                <Typography noWrap component="span" sx={{ display: { xs: "none", md: "inline" } }} onClick={() => setWeather(item)}>
                  {item.name}
                </Typography>
                <ClearIcon onClick={() => deleteAtIndex(idx)} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Toolbar>
  );
};

export default SecondToolbar;
