import { NavLink } from "react-router-dom";
import { Toolbar, Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
require("../Header.css");

const ThirdToolbar = () => {
  return (
    <Toolbar disableGutters={true} variant="dense" sx={{ bgcolor: "#B0C4DE" }}>
      <Container maxWidth="md">
        <Grid container className={"navigation"} sx={{ textAlign: "center" }}>
          <Grid item xs={4}>
            <NavLink to="/">
              <Typography variant="h6" noWrap component="span">
                Today
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={4}>
            <NavLink to="daily">
              <Typography variant="h6" noWrap component="span">
                Daily
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={4}>
            <NavLink to="hourly">
              <Typography variant="h6" noWrap component="span">
                Hourly
              </Typography>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </Toolbar>
  );
};

export default ThirdToolbar;
