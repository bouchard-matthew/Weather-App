import * as React from 'react';
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';

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

const responsivePaper = {
  display: { xs: "none", sm: "none", md: 'inline', lg: "inline" }

};

const Header = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar className={'main'}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

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
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>

        <Toolbar  className={"weather"}>
          <div>
            <img alt="img1" src="http://openweathermap.org/img/wn/10d.png" />
            <Typography
              noWrap
              component="span"
            >
              Rainy
            </Typography>
          </div>
          
          <div>
            <img alt="img2" src="http://openweathermap.org/img/wn/02d.png" />
            <Typography
              noWrap
              component="span"
            >
              Partly Cloudy
            </Typography>
          </div>
          
          <div>
            <img alt="img3" src="http://openweathermap.org/img/wn/01d.png" />
            <Typography
              noWrap
              component="span"
            >
              Sunny
            </Typography>
        </div>    
        </Toolbar>

        <Toolbar className={'navigation'} disableGutters={true} variant="dense">
            <div>
                  <NavLink to="/">
                    <Typography
                      variant="h6"
                      noWrap
                      component="span"
                    > 
                      Today
                    </Typography>
                  </NavLink>
            </div>
            <div>
                  <NavLink to="weekly">
                    <Typography
                      variant="h6"
                      noWrap
                      component="span"
                    > 
                      Weekly
                    </Typography>
                  </NavLink>
            </div>
            <div>
                  <NavLink to="hourly">
                    <Typography
                      variant="h6"
                      noWrap
                      component="span"
                    > 
                      Hourly
                    </Typography>
                  </NavLink>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Header;