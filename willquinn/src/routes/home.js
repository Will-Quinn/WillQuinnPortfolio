import React from "react";
import NavBar from './shared/NavBar';
import Footer from './shared/footer';
import { Avatar, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import me from '../assets/me.png';
import cloudmd from '../assets/cloudMD.png';
import cloudlg from '../assets/cloudLG.png';
import birds from '../assets/birds.png';

import './css/home.css'

    
export default function Home(){

    return (
      /* add grid */
 <div className="home">
        <NavBar />
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
<div className="homeIntro">
          <img className="birds" src={birds} alt="birds"/>
          <Typography className="hi" variant="subtitle1" component="subtitle1" color="#361aea">
            Hi, I'm
          </Typography>
          <Typography className="name" variant="h1" component="h1" color="#361aea">
            Will Quinn
          </Typography>
          <Typography className="hi2" variant="subtitle2" component="subtitle2" color="#361aea" sx={{ fontSize: "1.5rem",marginLeft: "-5%"}}>
            <p>Bachelor of Computer and Information Sciences in Software Development</p>
          </Typography>
        </div>
        </Grid>
        <Grid item xs={4}>
          <img className="cloud1" src={cloudlg} alt="cloud"/>
          <Avatar
            className="avatar"
            alt="Will Quinn"
            src={me}
            sx={{ width: 350, height: 350, position: "absolute", marginLeft: "33.5%", marginRight: "auto",marginTop: "-9%"}}
          />
          <img className="cloud2" src={cloudmd} alt="cloud"/>
        </Grid>
        <Grid item xs={4}>
<div className="homeAbout">
          <Typography className="homeText" variant="h2" component="h2" color="#361aea" sx={{ fontSize: "1.5rem"}}>
            <p>A love for learning and a passion for technology.</p> 
            <p>Searching for opportunities to surround myself with great people</p> 
            <p>who can nurture my skills and grow my career.</p>
          </Typography>
        </div>  
        </Grid>
      </Grid>
    </Box>
        <div className="footerDiv">
        <Footer />
        </div>
     </div>     
    );
  }
