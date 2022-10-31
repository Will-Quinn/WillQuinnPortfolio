//imports
import React from "react";
import { AppBar, Avatar, Box, Link, Toolbar } from "@mui/material";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import { styled } from "@mui/material";
//components and functions here
function NavBar() {
  const Burger = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  const NavLinks = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  }));
  return (
    <AppBar sx={{ background: 0, color: 0, boxShadow: 0 }} position="absolute">
      <Toolbar className="toolbar" justify="space-between">
        <Link href={"/"}>
          <Avatar
            sx={{
              width: "5rem",
              height: "5rem",
              margin: "0.5rem",
              padding: "1%",
              borderLeft: "5px solid #361aea",
              float: "left",
            }}
            className="logo"
            alt="logo"
            src={logo}
            variant="square"
          />
        </Link>
        <NavLinks className="navLinks">
          <NavLink
            className="barLink"
            to="/"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
          <NavLink
            className="barLink"
            to="/About"
            style={{ textDecoration: "none" }}
          >
            About
          </NavLink>
          <NavLink
            className="barLink"
            to="/Projects"
            style={{ textDecoration: "none" }}
          >
            Projects
          </NavLink>
          <NavLink
            className="barLink"
            to="/Contact"
            style={{ textDecoration: "none" }}
          >
            Contact
          </NavLink>
        </NavLinks>
        <Burger sx={{ marginLeft: "42%" }}>
          <NavDrawer></NavDrawer>
        </Burger>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
