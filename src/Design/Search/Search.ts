import { alpha, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  marginRight: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

export default Search;
