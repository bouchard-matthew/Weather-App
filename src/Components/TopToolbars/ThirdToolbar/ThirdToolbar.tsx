import Link from "next/link";
import { Toolbar, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useCurrentPath } from "Hooks/useCurrentPath";

const pageNamesLinks = {
  Today: "/",
  Daily: "/daily",
  Hourly: "/hourly",
} as const;

const ThirdToolbar = () => {
  const path = useCurrentPath();
  return (
    <Toolbar disableGutters={true} variant="dense" sx={{ bgcolor: "#B0C4DE" }}>
      <Container maxWidth="md">
        <Grid container sx={{ textAlign: "center", "& div a": { textDecoration: "none" } }}>
          {Object.entries(pageNamesLinks).map((item) => {
            const url = item[1];
            return (
              <Grid item xs={4} key={url}>
                <Link href={url}>
                  <Button variant="text" sx={{ color: "white", background: `${path == url ? "blue" : ""}` }}>
                    {item[0]}
                  </Button>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Toolbar>
  );
};

export default ThirdToolbar;
