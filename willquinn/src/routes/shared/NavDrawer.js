import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./NavDrawer.css";

export default function NavDrawer() {
  const styles = {
    drawerPaper: {
      width: "100%",
    },
  };
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        background: 0,
        top: "4rem",
        boxShadow: "none",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="navLinks">
        <Link to="/">
          <ListItem
            className="drawerLink"
            key="account"
            sx={{ fontSize: "3rem", color: "#361aea" }}
          >
            Home
          </ListItem>
        </Link>
        <Link to="/About">
          <ListItem
            className="drawerLink"
            key="account"
            sx={{ fontSize: "3rem", color: "#361aea" }}
          >
            About
          </ListItem>
        </Link>
        <Link to="/Projects">
          <ListItem
            className="drawerLink"
            key="account"
            sx={{ fontSize: "3rem", color: "#361aea" }}
          >
            Projects
          </ListItem>
        </Link>
        <Link to="/Contact">
          <ListItem
            className="drawerLink"
            key="account"
            sx={{ fontSize: "3rem", color: "#361aea" }}
          >
            Contact
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            className="burger"
            sx={{
              color: "#361aea",
              height: "15vh",
              width: "15vh",
            }}
            onClick={toggleDrawer(anchor, true)}
            fontSize="large"
          >
            {anchor}
          </MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            BackdropProps={{ invisible: true }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
