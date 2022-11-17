import * as React from 'react';
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography, InputBase, Grid, Button }from '@mui/material';
import { Container } from '@mui/system';

require("./Header.css");

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  marginRight: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Header = ({handler, handleState}: any) => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar sx={{ backgroundColor: "#FF7F50" }}>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            Weather
          </Typography>

          <Search>

            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search… zip"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => handler(e)}
            />
          </Search>
          <Button variant="outlined" onClick={(e) => handleState(e)}>GO</Button>
        </Toolbar>
        
        <Toolbar sx={{ backgroundColor: '#6495ED' }}>
          <Container maxWidth="md">
          <Grid container className={'weather'} sx={{textAlign: 'center'}}>
            <Grid item xs={4}>
              <img alt="img1" src="http://openweathermap.org/img/wn/10d.png" />
              <Typography
                noWrap
                component="span"
                sx={{display:{xs: 'none'}}}
              >
                Rainy
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <img alt="img2" src="http://openweathermap.org/img/wn/02d.png" />
              <Typography
                noWrap
                component="span"
                sx={{display:{xs: 'none'}}}
              >
                Partly Cloudy
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <img alt="img3" src="http://openweathermap.org/img/wn/01d.png" />
              <Typography
                noWrap
                component="span"
                sx={{display:{xs: 'none'}}}
              >
                Sunny
              </Typography>  
            </Grid>
          </Grid>
          </Container>
        </Toolbar>


        <Toolbar disableGutters={true} variant="dense" sx={{ bgcolor: "#B0C4DE" }}>
          <Container maxWidth='md'>
            <Grid container className={'navigation'} sx={{textAlign: 'center'}}>
              <Grid item  xs={4}>
              <NavLink to="/">
                    <Typography
                      variant="h6"
                      noWrap
                      component="span"
                    > 
                      Today
                    </Typography>
                  </NavLink>
              </Grid>
              <Grid item  xs={4}>
                  <NavLink to="weekly">
                    <Typography
                      variant="h6"
                      noWrap
                      component="span"
                    > 
                      Weekly
                    </Typography>
                  </NavLink>
              </Grid>
              <Grid item  xs={4}>
                  <NavLink to="hourly">
                    <Typography
                      variant="h6"
                      noWrap
                      component="span"
                    > 
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
}

export default Header;