import { Toolbar, Typography, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Props } from "./FirstToolbar.types";
import { Units } from "Types/types";
import { Search, SearchIconWrapper, StyledInputBase } from "Design";

const FirstToolbar = ({ handleState, handler, units, setUnits }: Props) => {
  return (
    <Toolbar sx={{ backgroundColor: "#FF7F50" }}>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
        Weather
      </Typography>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Units</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="unit"
          value={units}
          onChange={(e: any) => {
            setUnits(e.target.value);
          }}
        >
          <MenuItem value={Units.imperial}>{`US | °F`}</MenuItem>
          <MenuItem value={Units.metric}>{`UK | °C`}</MenuItem>
          <MenuItem value={Units.standard}>{`STND | °K`}</MenuItem>
        </Select>
      </FormControl>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase placeholder="Search… zip" inputProps={{ "aria-label": "search" }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handler(e)} />
      </Search>

      <Button variant="outlined" onClick={() => handleState()}>
        GO
      </Button>
    </Toolbar>
  );
};

export default FirstToolbar;
