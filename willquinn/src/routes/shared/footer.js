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
      <BottomNavigation className="footer" sx={{ background: "#361aea", height: "64px", marginTop: "10%", bottom: 0}} position="fixed">
        <Link className = "svg"  href={"https://www.linkedin.com/in/william-quinn-03694a218/"}>
          <Avatar sx={{ width: "4rem", height: "4rem"}}
            alt="linkedin"
            src={linkedin}
            variant="square"
          />
        </Link>
        <Typography sx={{marginTop:"0.8%",fontSize: "1.4rem",color: "#fcfcfd"}} className = "author" variant="body2">
            William Quinn 2022
        </Typography>
        <Link className = "svg" href={"https://github.com/Will-Quinn"}>
          <Avatar sx={{ width: "4rem", height: "4rem"}}
            alt="github"
            src={github}
            variant="square"
          />
        </Link>
        </BottomNavigation>
  );
}
export default Footer;