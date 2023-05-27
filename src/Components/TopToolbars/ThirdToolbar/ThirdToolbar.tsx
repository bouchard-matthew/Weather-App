import Link from "next/link";
import { Toolbar, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";

import type { Props } from "./ThirdToolbar.types";

const pageNamesLinks = {
  Today: "/",
  Daily: "/daily",
  Hourly: "/hourly",
} as const;

const ThirdToolbar = ({ path }: Props) => {
  return (
    <Toolbar disableGutters={true} variant="dense" sx={{ bgcolor: "#B0C4DE" }}>
      <Container maxWidth="md">
        <Grid container sx={{ textAlign: "center", "& div a": { textDecoration: "none" } }}>
          {Object.entries(pageNamesLinks).map((item, index) => (
            <Grid item xs={4} key={index}>
              <Link href={`${item[1]}`}>
                <Button variant="text" sx={{ color: "white", background: `${path == item[1] ? "blue" : ""}` }}>
                  {item[0]}
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Toolbar>
  );
};

export default ThirdToolbar;
