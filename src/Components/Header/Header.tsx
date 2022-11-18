import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box, Toolbar, Typography, Grid, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Search, SearchIconWrapper, StyledInputBase } from "StyledComponents/Style";

require("./Header.css");

const Header = ({ handleState, handler }: any) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "white" }}>
          <Toolbar sx={{ backgroundColor: "#FF7F50" }}>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              Weather
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase placeholder="Search… zip" inputProps={{ "aria-label": "search" }} onChange={(e) => handler(e)} />
            </Search>
            <Button variant="outlined" onClick={() => handleState()}>
              GO
            </Button>
          </Toolbar>

          <Toolbar sx={{ backgroundColor: "#6495ED" }}>
            <Container maxWidth="md">
              <Grid container className={"weather"} sx={{ textAlign: "center" }}>
                <Grid item xs={4}>
                  <img alt="img1" src="http://openweathermap.org/img/wn/10d.png" />
                  <Typography noWrap component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                    Rainy
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <img alt="img2" src="http://openweathermap.org/img/wn/02d.png" />
                  <Typography noWrap component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                    Partly Cloudy
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <img alt="img3" src="http://openweathermap.org/img/wn/01d.png" />
                  <Typography noWrap component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                    Sunny
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>

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
                  <NavLink to="weekly">
                    <Typography variant="h6" noWrap component="span">
                      Weekly
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
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
