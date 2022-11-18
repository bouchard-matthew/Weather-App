import { AppBar , Box } from "@mui/material";
import { FirstToolbar } from "Components/TopToolbars/FirstToolbar";
import { SecondToolbar } from "Components/TopToolbars/SecondToolbar";
import { ThirdToolbar } from "Components/TopToolbars/ThirdToolbar";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative" sx={{ bgcolor: "white" }}>
          
          <FirstToolbar />

          <SecondToolbar />

          <ThirdToolbar />

        </AppBar>
      </Box>
    </>
  );
};

export default Header;
