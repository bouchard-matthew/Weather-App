import { Toolbar, Typography, Grid } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Container } from "@mui/system";
import { Weather } from "Types/types";

type Props = {
  weatherArray: Weather[];
  handleClick: (latitude: number, longitude: number) => void;
  deleteAtIndex: (index: number) => void;
};

const SecondToolbar = ({ weatherArray, handleClick, deleteAtIndex }: Props) => {
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
                onClick={() => handleClick(item.lat, item.lon)}
              >
                <img style={{ verticalAlign: "middle" }} alt="img1" src={`http://openweathermap.org/img/wn/${item.current.weather[0].icon}.png`} />
                <Typography noWrap component="span" sx={{ display: { xs: "none", md: "inline" } }}>
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
