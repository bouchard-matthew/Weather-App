import { NavLink } from "react-router-dom";
import { Toolbar, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useCurrentPath } from "Hooks/useCurrentPath";

const ThirdToolbar = () => {
  const pageNames = ["Today", "Daily", "Hourly"];
  const pageLinks = ["/", "/daily", "/hourly"];
  const path = useCurrentPath();

  return (
    <Toolbar disableGutters={true} variant="dense" sx={{ bgcolor: "#B0C4DE" }}>
      <Container maxWidth="md">
        <Grid container sx={{ textAlign: "center", "& div a": { textDecoration: "none" } }}>
          {pageNames.map((item, index) => {
            return (
              <Grid item xs={4} key={index}>
                <NavLink to={`${pageLinks[index]}`}>
                  <Button variant="text" sx={{ color: "white", background: `${path === pageLinks[index] ? "blue" : ""}` }}>
                    {item}
                  </Button>
                </NavLink>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Toolbar>
  );
};

export default ThirdToolbar;
