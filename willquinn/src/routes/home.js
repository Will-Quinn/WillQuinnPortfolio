import React from "react";
import NavBar from './shared/NavBar';
import Footer from './shared/footer';
import { Avatar, Typography } from "@mui/material";
import me from '../assets/me.png';
import cloudsm from '../assets/cloudSM.png';
import cloudmd from '../assets/cloudMD.png';
import cloudlg from '../assets/cloudLG.png';
export default function Home(){
    return (
      <div className="home">
        <NavBar />
        <div className="homeIntro">
          <Typography className="hi" variant="subtitle1" component="subtitle1" color="#361aea">
            Hi, I'm
          </Typography>
          <Typography className="name" variant="h1" component="h1" color="#361aea">
            Will Quinn
          </Typography>
          <Typography className="hi2" variant="subtitle2" component="subtitle2" color="#361aea" sx={{ fontSize: "1.3rem",marginLeft: "-2%"}}>
            <p>Bachelor of Computer and Information Sciences in Software Development</p>
          </Typography>
          <img className="cloud1" src={cloudlg} alt="Will Quinn"/>
          <Avatar
            alt="Will Quinn"
            src={me}
            sx={{ width: 350, height: 350,position: "absolute", marginLeft: "33.5%", marginRight: "auto",marginTop: "-9%"}}
          />
          <img className="cloud2" src={cloudmd} alt="Will Quinn"/>
        </div>
        <div className="homeAbout">
          <Typography className="homeText" variant="h2" component="h2" color="#361aea" sx={{ fontSize: "1.5rem"}}>
            <p>A love for learning and a passion for technology.</p> 
            <p>Searching for opportunities to surround myself with great people</p> 
            <p>who can nurture my skills and grow my career.</p>
          </Typography>
        </div>  
        <div className="footerHome">
        <Footer />
        </div>
      </div>
    );
  }
