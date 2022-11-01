import React from "react";
import NavBar from "./shared/NavBar";
import Footer from "./shared/footer";
import { Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import "./css/about.css";

export default function About() {
  const Item = styled(Paper)(({ theme }) => ({
    boxShadow: "none",
    border: "none",
    borderRadius: 0,
    backgroundColor: "transparent",
  }));
  const MobileBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  const MonitorBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));
  return (
    <div className="about">
      <NavBar />
      <MonitorBox sx={{ flexGrow: 1, marginTop: "10%", bgcolor: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <div className="aboutIntro">
                <Typography
                  className="aboutBody"
                  variant="subtitle1"
                  component="subtitle1"
                  color="#361aea"
                  sx={{ marginLeft: "40%" }}
                >
                  About
                </Typography>
                <Typography
                  className="aboutHeading"
                  variant="h1"
                  component="h1"
                  color="#361aea"
                  sx={{ marginLeft: "40%" }}
                >
                  Me
                </Typography>
                <div className="iconDiv">
                  <Link href={"https://www.javascript.com/"} target="_blank">
                    <img className="icons" src={js} alt="Javascript" />
                  </Link>
                  <Link
                    href={"https://www.typescriptlang.org/"}
                    target="_blank"
                  >
                    <img className="icons" src={ts} alt="Typescript" />
                  </Link>
                  <Link href={"https://reactjs.org/"} target="_blank">
                    <img className="icons" src={react} alt="React" />
                  </Link>
                  <Link
                    href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
                    target="_blank"
                  >
                    <img className="icons" src={css} alt="CSS" />
                  </Link>
                </div>
                <Typography
                  className="aboutBody"
                  variant="subtitle1"
                  component="subtitle1"
                  color="#361aea"
                  sx={{ marginLeft: "40%" }}
                >
                  This and more...
                </Typography>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div className="aboutMainDiv">
                <Typography
                  className="aboutMain"
                  variant="subtitle1"
                  component="subtitle1"
                  color="#361aea"
                  sx={{ lineHeight: "40px", fontSize: "2rem" }}
                >
                  <div className="typedText">
                    <p className="pLineOne">
                      From a very young age I've had a keen interest in IT.
                    </p>
                  </div>
                  <p className="fade">
                    Only until recently did I realise my potential and
                    understood careers in IT aren't just for your Bill Gates or
                    Steve Jobs types. I can excel here too.
                  </p>
                  <p className="fade">
                    After a brief stint in the navy trying to become a
                    Communications Warfare Specialist was ended by a back
                    injury, I decided it was time to challenge myself
                    academically and try my luck at Computer science at AUT.
                  </p>
                  <p className="fade">
                    These days I wouldn't change anything, My experience through
                    my degree has embedded a deep passion for problem solving,
                    Web design/development, and creating products that me and my
                    team can be proud of, and that our clients can enjoy.
                  </p>
                </Typography>
              </div>
            </Item>
          </Grid>
        </Grid>
      </MonitorBox>
      <MobileBox sx={{ flexGrow: 1, marginTop: "10%", bgcolor: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ justifyContent: "center" }}>
            <Typography
              className="aboutHeadingM"
              variant="h1"
              component="h1"
              color="#361aea"
            >
              About
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Box className="aboutMainDivM" sx={{ height: "50%" }}>
                <Typography
                  className="aboutMainM"
                  variant="subtitle1"
                  component="subtitle1"
                  color="#361aea"
                  sx={{ lineHeight: "25px" }}
                >
                  <div className="typedText">
                    <p className="pLineOne">
                      From a very young age I've had a keen interest in IT.
                    </p>
                  </div>
                  <p className="fade">
                    Only until recently did I realise my potential and
                    understood careers in IT aren't just for your Bill Gates or
                    Steve Jobs types. I can excel here too.
                  </p>
                  <p className="fade">
                    After a brief stint in the navy trying to become a
                    Communications Warfare Specialist was ended by a back
                    injury, I decided it was time to challenge myself
                    academically and try my luck at Computer science at AUT.
                  </p>
                  <p className="fade">
                    These days I wouldn't change anything, My experience through
                    my degree has embedded a deep passion for problem solving,
                    Web design/development, and creating products that me and my
                    team can be proud of, and that our clients can enjoy.
                  </p>
                </Typography>
              </Box>
              <Box
                className="aboutMainDivM"
                sx={{ height: "50%", marginTop: "15%!important" }}
              >
                <Typography
                  className="aboutMainM"
                  variant="subtitle1"
                  component="subtitle1"
                  color="#361aea"
                  sx={{ lineHeight: "25px" }}
                >
                  <p className="fade">
                    Knowledge in Javascript, React, HTML, CSS, SQL, PHP
                  </p>
                  <p className="fade">
                    Currently transitioning to Typescript, Improving React and
                    PHP knowledge
                  </p>
                  <p className="fade">
                    Able to work in teams using agile practices.
                  </p>
                  <p className="fade">
                    Great written and communication skills.
                  </p>
                  <p className="fade">
                    Great leadership and conflict resolution skills.
                  </p>
                </Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </MobileBox>
      <div className="footerDiv">
        <Footer />
      </div>
    </div>
  );
}
