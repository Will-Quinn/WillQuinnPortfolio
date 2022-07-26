import React from "react";
import Footer from './shared/footer';
import {Typography } from "@mui/material";
import {Avatar, Link} from "@mui/material";
import logo from "../assets/logo.png";
import './css/pageNotFound.css'



export default function PageNotFound(){

    return (
      /* add grid */
 <div className="pageNotFound">
          <Typography className="name" variant="h1" component="h1" color="#361aea" sx ={{fontSize: "4.5rem", width: "100%",height: "auto",maxWidth: "100%", textAlign: "center", margin: "auto"}}>
            Oops!
          </Typography>
          <Typography className="name" variant="h1" component="h1" color="#361aea" sx ={{fontSize: "4.5rem", width: "100%",height: "auto",maxWidth: "100%", textAlign: "center", margin: "auto"}}>
            Something went wrong.
          </Typography>
        <Link href={"/"}sx={{margin: "auto", textDecoration: "none", color: "#361aea"}}>
          <Avatar sx={{ width: "15rem", height: "15rem", padding: "1%", margin: "auto", marginTop: "5%"}}
            className="logo"
            alt="logo"
            src={logo}
            variant="square"
          />
          Return to Homepage
        </Link>
        <div className="footerDiv">
        <Footer />
        </div>
     </div>     
    );
  }
 