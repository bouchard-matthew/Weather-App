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


const Header = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
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
      </AppBar>
    </Box>
    <div className={"weather"}>
        <div>
          <img alt="img1" src="http://openweathermap.org/img/wn/10d.png" />
          <span>Rainy</span>
        </div>
        
        <div>
          <img alt="img2" src="http://openweathermap.org/img/wn/02d.png" />
          <span>Partly Cloudy</span>
        </div>
        
        <div>
          <img alt="img3" src="http://openweathermap.org/img/wn/01d.png" />
          <span>Sunny</span>
        </div>
    </div>

    <nav className={"navigation"}>
        <ul className={"listItems"}>
            <li>
                <NavLink to="/">Today</NavLink>
            </li>
            <li>
                <NavLink to="weekly">Weekly</NavLink>
            </li>
            <li>
                <NavLink to="hourly">Hourly</NavLink>
            </li>
        </ul>
    </nav>
    </>
  );
}

export default Header;