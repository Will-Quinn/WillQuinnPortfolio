//imports
import React from "react";
import { AppBar, Avatar, Link, Toolbar} from "@mui/material";
import logo from "../../assets/logo.png";
import { NavLink} from "react-router-dom";


//components and functions here
function NavBar() {
  return (
    <AppBar style={{ background: "rgba(30, 30, 30, 0.3)" }} position="fixed">
      <Toolbar className="toolbar">
        <Link href={"/home"}>
          <Avatar sx={{ width: "5rem", height: "5rem", margin: "0.5rem"}}
            className="logo"
            alt="logo"
            src={logo}
            variant="square"
          />
        </Link>
        <div className="navLinks">
         <NavLink
          className="barLink"
          to="/home"
          style={(isActive) => ({
            color: isActive ? "#f0f3bdff" : "#02c39aff",
            textDecoration: "none",
            "text-shadow": isActive
              ? "0 0 10px #f0f3bdff"
              : "0px 2px 9px rgba(0,0,0,0.5)",
            textShadowColour: isActive
              ? "2px 2px 20px #f0f3bdff"
              : "0 0 15px rgba(255,255,255,.3)",
          })}
          
        >Home</NavLink>
                 <NavLink
          className="barLink"
          to="/about"
          style={(isActive) => ({
            color: isActive ? "#f0f3bdff" : "#02c39aff",
            textDecoration: "none",
            "text-shadow": isActive
              ? "0 0 10px #f0f3bdff"
              : "0px 2px 9px rgba(0,0,0,0.72)",
            textShadowColour: isActive
              ? "2px 2px 20px #f0f3bdff"
              : "0 0 15px rgba(255,255,255,.5)",
          })}
        >About</NavLink> 
                 <NavLink
          className="barLink"
          to="/projects"
          style={(isActive) => ({
            color: isActive ? "#f0f3bdff" : "#02c39aff",
            textDecoration: "none",
            "text-shadow": isActive
              ? "0 0 10px #f0f3bdff"
              : "0px 2px 9px rgba(0,0,0,0.72)",
            textShadowColour: isActive
              ? "2px 2px 20px #f0f3bdff"
              : "0 0 15px rgba(255,255,255,.5)",
          })}
        >Projects</NavLink> 
                 <NavLink
          className="barLink"
          to="/contact"
          style={(isActive) => ({
            color: isActive ? "#f0f3bdff" : "#02c39aff",
            textDecoration: "none",
            "text-shadow": isActive
              ? "0 0 10px #f0f3bdff"
              : "0px 2px 9px rgba(0,0,0,0.72)",
            textShadowColour: isActive
              ? "2px 2px 20px #f0f3bdff"
              : "0 0 15px rgba(255,255,255,.5)",
          })}
        >Contact</NavLink>  
      </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;