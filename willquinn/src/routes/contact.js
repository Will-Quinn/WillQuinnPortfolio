import React from "react";
import NavBar from './shared/NavBar';
import Footer from './shared/footer';
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar } from "@mui/material";
import githubBlue from "../assets/githubBlue.png";
import linkedinBlue from "../assets/linkedinBlue.png";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { Button } from "@material-ui/core";

export default function Contact() {
      const Item = styled(Paper)(({ theme }) => ({
      boxShadow: "none",
      border: "none",
      borderRadius: 0,
      backgroundColor: "transparent",
}));
  return (
     <div className="contact">
        <NavBar />
      <Box sx={{ flexGrow: 1, marginTop: "10%", bgcolor: 0}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
         <div className="contactHeading">
          <Typography className="contactHeading" variant="h1" component="h1" color="#361aea"
          sx={{marginLeft: "40%"}}>
            Email
          </Typography>            
          <Typography className="contactText" variant="subtitle1" component="subtitle1" color="#361aea"
          sx={{marginLeft: "40%"}}>
            <a href="mailto:wrdquinn@gmail.com" className="contactLink">wrdquinn@gmail.com</a>
          </Typography>
          <Typography className="contactHeading" variant="h1" component="h1" color="#361aea"
          sx={{marginLeft: "40%"}}>
            Phone
          </Typography>            
          <Typography className="contactText" variant="subtitle1" component="subtitle1" color="#361aea"
          sx={{marginLeft: "40%"}}>
            <a href="tel:0278828905" className="contactLink">027 882 8905</a>
          </Typography>
          <Typography className="contactHeading" variant="h1" component="h1" color="#361aea"
          sx={{marginLeft: "40%", marginTop: "2%"}}>
            And...
          </Typography>           
          <div className="contactIconDiv1">
          <Typography className="contactText" variant="subtitle1" component="subtitle1" color="#361aea"
          sx={{marginLeft: "-4.2%"}}>
            <Avatar sx={{ width: "2.5rem", height: "2.5rem", float: "left", margin: "0.5rem"}}
            alt="linkedin"
            src={linkedinBlue}
            variant="square"
            />
            <a href="https://www.linkedin.com/in/william-quinn-03694a218/" className="contactLink">linkedin</a>
          </Typography>
          </div>   
          <div className="contactIconDiv2">
          <Typography className="contactText" variant="subtitle1" component="subtitle1" color="#361aea"
          sx={{marginLeft: "-6%"}}>
            <Avatar sx={{ width: "2.5rem", height: "2.5rem", float: "left", margin: "0.5rem"}}
            alt="linkedin"
            src={githubBlue}
            variant="square"
            />
            <a href="https://github.com/Will-Quinn" className="contactLink">Github</a>
          </Typography>   
          </div>               
          <div className="iconDiv">
          </div>
         <Typography className="contactText" variant="subtitle1" component="subtitle1" color="#361aea"
          sx={{marginLeft: "40%"}}>
            Lets get in Touch!
          </Typography>  
        </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
         <div className="contactForm">

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