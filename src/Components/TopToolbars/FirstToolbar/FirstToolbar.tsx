import SearchIcon from "@mui/icons-material/Search";
import { Toolbar, Typography, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "Design";
import { Units } from "Types/types";

import type { Props } from "./FirstToolbar.types";

const FirstToolbar = ({ fetchWeather, units, setUnits, setZip }: Props) => {
  return (
    <Toolbar sx={{ backgroundColor: "#FF7F50" }}>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
        Weather
      </Typography>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Units</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="unit"
          value={units}
          onChange={(e: any) => {
            setUnits(e.target.value);
          }}
        >
          {Object.values(Units).map((unit, idx) => {
            let unitDisplayValue;
            if (Units.imperial === unit) {
              unitDisplayValue = "US | °F";
            } else if (Units.metric === unit) {
              unitDisplayValue = "UK | °C";
            } else if (Units.standard === unit) {
              unitDisplayValue = "STND | °K";
            }
            return (
              <MenuItem key={idx} value={Units[unit]}>
                {unitDisplayValue}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase placeholder="Search" inputProps={{ "aria-label": "search" }} onChange={(e) => setZip(e.target.value)} />
      </Search>

      <Button variant="outlined" onClick={() => fetchWeather()}>
        GO
      </Button>
    </Toolbar>
  );
};

export default FirstToolbar;
