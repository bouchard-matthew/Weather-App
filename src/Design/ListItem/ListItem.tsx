import { styled } from "@mui/material";

const ListItem = styled("div")(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  textAlign: "center",
  "& svg": {
    height: "100%",
  },
}));

export default ListItem;
