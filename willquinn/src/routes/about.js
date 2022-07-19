import React from "react";
import NavBar from './shared/NavBar';
import Footer from './shared/footer';
import { Typography, Link } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import './css/about.css'

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
          <Link href={"https://www.javascript.com/"}>
            <img className="icons" src={js} alt="Javascript"/>
          </Link>
          <Link href={"https://www.typescriptlang.org/"}>
            <img className="icons" src={ts} alt="Typescript"/>
          </Link>
          <Link href={"https://reactjs.org/"}>
            <img className="icons" src={react} alt="React"/>
          </Link>
          <Link href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}>
            <img className="icons" src={css} alt="CSS"/>
          </Link>                    
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
          sx={{lineHeight: "40px", fontSize: "2rem"}}>
            <div className="typedText">
            <p className="pLineOne">From a very young age I've had a keen interest in IT.</p>
            </div>
            <p className="fade">Only until recently did I realise my potential and understood careers in IT aren't just for your Bill Gates or Steve Jobs types. I can excel here too.</p>  
            <p className="fade">After a brief stint in the navy trying to become a Communications Warfare Specialist was ended by a back injury, I decided it was time to challenge myself academically and try my luck at Computer science at AUT.</p> 
            <p className="fade">These days I wouldn't change anything, My experience through my degree has embedded a deep passion for problem solving, Web design/development, and creating products that me and my team can be proud of, and that our clients can enjoy.</p>
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