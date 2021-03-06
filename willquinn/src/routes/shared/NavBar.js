//imports
import React from "react";
import { AppBar, Avatar, Link, Toolbar} from "@mui/material";
import logo from "../../assets/logo.png";
import { NavLink} from "react-router-dom";

//components and functions here
function NavBar() {
  return (
    <AppBar sx={{ background: 0, color: 0, boxShadow: 0 }} position="absolute">
      <Toolbar className="toolbar">
        <Link href={"/"}>
          <Avatar sx={{ width: "5rem", height: "5rem", margin: "0.5rem",padding: "1%",borderLeft: "5px solid #361aea"}}
            className="logo"
            alt="logo"
            src={logo}
            variant="square"
          />
        </Link>
        <div className="navLinks" sx={{
        '@media only screen and (max-device-width: 1000px)':{
              marginLeft: "30%"
            },
        }}>
        <NavLink
          className="barLink"
          to="/"
          style={{ textDecoration: "none" }}
        >Home</NavLink>
        <NavLink
          className="barLink"
          to="/About"
          style={{ textDecoration: "none" }}
        >About</NavLink> 
        <NavLink
          className="barLink"
          to="/Projects"
          style={{ textDecoration: "none" }}
        >Projects</NavLink> 
        <NavLink
          className="barLink"
          to="/Contact"
          style={{ textDecoration: "none" }}
        >Contact</NavLink>  
      </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;