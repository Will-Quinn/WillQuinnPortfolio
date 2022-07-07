import React from "react";
import NavBar from './shared/NavBar';
import Footer from './shared/footer';
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import react from "../assets/react.png";
import css from "../assets/css.png";

export default function About() {
   const Item = styled(Paper)(({ theme }) => ({
      boxShadow: "none",
      border: "none",
      borderRadius: 0,
      backgroundColor: "transparent",
}));
  return (
     <div className="about">
        <NavBar />
      <Box sx={{ flexGrow: 1, marginTop: "10%", bgcolor: 0}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
         <div className="aboutIntro">
          <Typography className="aboutBody" variant="subtitle1" component="subtitle1" color="#361aea"
          sx={{marginLeft: "40%"}}>
            About
          </Typography>            
          <Typography className="aboutHeading" variant="h1" component="h1" color="#361aea"
          sx={{marginLeft: "40%"}}>
            Me
          </Typography>
          <div className="iconDiv">
          <img className="icons" src={js} alt="Javascript"/>
          <img className="icons" src={ts} alt="Typescript"/>
          <img className="icons" src={react} alt="react"/>
          <img className="icons" src={css} alt="cascading style sheets"/>
          </div>
         <Typography className="aboutBody" variant="subtitle1" component="subtitle1" color="#361aea"
          sx={{marginLeft: "40%"}}>
            This and more...
          </Typography>  
        </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div className="aboutMainDiv">
          <Typography className="aboutMain" variant="subtitle1" component="subtitle1" color="#361aea"
          sx={{marginTop: "10%"}}>
            hello
          </Typography>
          </div>
          </Item>
        </Grid>

      </Grid>
    </Box>
        <div className="footerDiv">
        <Footer />
        </div>
     </div>
  );
}