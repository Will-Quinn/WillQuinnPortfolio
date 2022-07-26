//imports
import React from "react";
import {Avatar, Link} from "@mui/material";
import { BottomNavigation } from '@mui/material';
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import Typography from '@mui/material/Typography';
//components and functions here
function Footer() {
  return (
      <BottomNavigation className="footer" sx={{ background: "#361aea", height: "3%", bottom: 0, justifyContent:"space-between" }} position="fixed">
        <div className = "authorDiv">
        <Typography sx={{marginTop:"0.5%",fontSize: "1rem",color: "#fcfcfd"}} className = "author" variant="body2">
            William Quinn 2022
        </Typography>
        </div>
        <div className = "svgDiv">
        <Link className = "svg"  href={"https://www.linkedin.com/in/william-quinn-03694a218/"} target="_blank">
          <Avatar sx={{ width: "2.5rem", height: "2.5rem"}}
            alt="linkedin"
            src={linkedin}
            variant="square"
          />
        </Link>
        <Link className = "svg" href={"https://github.com/Will-Quinn"} target="_blank">
          <Avatar sx={{ width: "2.5rem", height: "2.5rem"}}
            alt="github"
            src={github}
            variant="square"
          />
        </Link>
        </div>
        </BottomNavigation>
  );
}
export default Footer;