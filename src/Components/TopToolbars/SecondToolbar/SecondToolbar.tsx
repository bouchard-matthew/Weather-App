import { Toolbar, Typography, Grid } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Container } from "@mui/system";
import { Weather } from "Types/types";

type Props = {
  weatherArray: Weather[];
  handleClick: (latitude: number, longitude: number) => void;
  deleteWeather: (index: number) => void;
};

const SecondToolbar = ({ weatherArray, handleClick, deleteWeather }: Props) => {
  return (
    <Toolbar sx={{ backgroundColor: "#6495ED" }}>
      <Container maxWidth="md">
        <Grid container sx={{ textAlign: "center" }}>
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
                    verticalAlign: "middle",
                  },
                  "&:hover svg:hover": {
                    color: "red",
                  },
                }}
                key={idx}
                item
                xs={4}
              >
                <img
                  style={{ verticalAlign: "middle" }}
                  alt="img1"
                  src={`http://openweathermap.org/img/wn/${item.current.weather[0].icon}.png`}
                  onClick={() => handleClick(item.lat, item.lon)}
                />
                <Typography noWrap component="span" sx={{ display: { xs: "none", md: "inline" } }} onClick={() => handleClick(item.lat, item.lon)}>
                  {item.name}
                </Typography>
                {idx !== 0 && <ClearIcon onClick={() => deleteWeather(idx)} />}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Toolbar>
  );
};

export default SecondToolbar;
