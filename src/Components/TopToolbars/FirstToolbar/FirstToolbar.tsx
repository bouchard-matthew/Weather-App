import SearchIcon from "@mui/icons-material/Search";
import { Toolbar, Typography, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "Design";
import { Units } from "Types/types";
import { BaseSyntheticEvent } from "react";

import type { Props } from "./FirstToolbar.types";

const unitDisplayValues = {
  [Units.imperial]: "US | °F",
  [Units.metric]: "UK | °C",
  [Units.standard]: "STND | °K",
} as const;

const FirstToolbar = ({ fetchWeather, units, setUnits, setZip }: Props) => {
  return (
    <Toolbar sx={{ backgroundColor: "#FF7F50" }}>
      <Typography variant="h6" noWrap component="div" flexGrow="1" sx={{ display: { xs: "none", sm: "block" } }}>
        Weather
      </Typography>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Units</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="unit"
          value={units}
          onChange={(e) => {
            setUnits(e.target.value as Units);
          }}
        >
          {Object.values(Units).map((unit, idx) => (
            <MenuItem key={idx} value={Units[unit]}>
              {unitDisplayValues[unit]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          onKeyDown={(e) => e.code == "NumpadEnter" && fetchWeather()}
          onChange={(e: BaseSyntheticEvent) => setZip(e.target.value)}
        />
      </Search>

      <Button variant="outlined" onClick={() => fetchWeather()}>
        GO
      </Button>
    </Toolbar>
  );
};

export default FirstToolbar;
