import { Toolbar, Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
require("../Header.css");

const SecondToobar = () => {
    return (
            <Toolbar sx={{ backgroundColor: "#6495ED" }}>
                <Container maxWidth="md">
                <Grid container className={"weather"} sx={{ textAlign: "center" }}>
                    <Grid item xs={4}>
                    <img alt="img1" src="http://openweathermap.org/img/wn/10d.png" />
                    <Typography noWrap component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                        Brooklyn
                    </Typography>
                    </Grid>

                    <Grid item xs={4}>
                    <img alt="img2" src="http://openweathermap.org/img/wn/02d.png" />
                    <Typography noWrap component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                        Toccoa
                    </Typography>
                    </Grid>

                    <Grid item xs={4}>
                    <img alt="img3" src="http://openweathermap.org/img/wn/01d.png" />
                    <Typography noWrap component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                        Cornelia
                    </Typography>
                    </Grid>
                </Grid>
                </Container>
            </Toolbar>
    )
}

export default SecondToobar;