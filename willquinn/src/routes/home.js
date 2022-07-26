import React from "react";
import NavBar from './shared/NavBar';
import Footer from './shared/footer';
import { Avatar, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import me from '../assets/me.png';
import cloudmd from '../assets/cloudMD.png';
import cloudlg from '../assets/cloudLG.png';
import './css/home.css'
import Image from 'mui-image'


export default function Home(){

    return (
      /* add grid */
 <div className="home">
        <NavBar />
    <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
        <div className="homeIntro" sx={{}}>
          <Typography className="hi" variant="subtitle1" component="subtitle1" color="#361aea" sx ={{width: "100%",height: "auto",maxWidth: "100%"}}>
            Hi, I'm
          </Typography>
          <Typography className="name" variant="h1" component="h1" color="#361aea" sx ={{fontSize: "4.5rem", width: "100%",height: "auto",maxWidth: "100%", textAlign: "center"}}>
            Will Quinn
          </Typography>
          <Typography className="hi2" variant="subtitle2" component="subtitle2" color="#361aea" sx={{ fontSize: "1.5rem", width: "100%",height: "auto", maxWidth: "100%", textAlign: "center"}}>
            <p sx={{marginLeft: "-65%"}}>Bachelor of Computer and Information Sciences in Software Development</p>
          </Typography>
        </div>
        </Grid>
        <Grid item xs={4}>
          <div className="homeMiddle" sx={{flexWrap: "wrap" }}>
          <img className="cloud1" src={cloudlg} alt="cloud" sx={{ width: 350, height: 350, marginLeft: "50%"}}/>
          <Image
            className="me"
            alt="Will Quinn"
            src={me}
            sx={{ maxWidth: "350px", maxHeight: "350px", width: "auto",height: "auto", margin: "auto", marginTop: "45%",borderRadius: "50%" }}
          />
          <img className="cloud2" src={cloudmd} alt="cloud"/>
          </div>
        </Grid>
        <Grid item xs={4}>
        <div className="homeAbout" sx={{margin: "25%",width: "100%",height: "auto",maxWidth: "100%"}}>
          <Typography className="homeText" variant="h2" component="h2" color="#361aea" sx={{ fontSize: "1.5rem", width: "max-content" }}>
            <p>A love for learning and a passion for technology.</p> 
            <p>Searching for opportunities to surround myself with great people</p> 
            <p>who can nurture my skills and grow my career.</p>
          </Typography>
        </div>  
        </Grid>
      </Grid>
    </Box>

        <div className="footerDiv2">
        <Footer />
        </div>
     </div>     
    );
  }
 