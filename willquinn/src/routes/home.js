import React from "react";
import NavBar from "./shared/NavBar";
import Footer from "./shared/footer";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import me from "../assets/me.png";
import cloudmd from "../assets/cloudMD.png";
import cloudlg from "../assets/cloudLG.png";
import "./css/home.css";
import Image from "mui-image";
import { styled } from "@mui/material";

export default function Home() {
  const PictureGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  }));
  const IntroGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      marginTop: "40%",
      position: "absolute",
      bgColor: "black",
      homeIntro: {
        hi: {
          fontSize: "1rem!important",
          marginLeft: "0!important",
        },
      },
    },
  }));
  const AboutGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      marginTop: "300%",
      position: "absolute",
    },
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
    <div className="home">
      <NavBar />
      <MonitorBox sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <IntroGrid item xs={4}>
            <div className="homeIntro">
              <Typography
                className="hi"
                variant="subtitle1"
                component="subtitle1"
                color="#361aea"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  fontSize: "2rem",
                  color: "#361aea",
                  marginLeft: "40%",
                }}
              >
                Hi, I'm
              </Typography>
              <Typography
                className="name"
                variant="h1"
                component="h1"
                color="#361aea"
                sx={{
                  fontSize: "4.5rem",
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  textAlign: "center",
                }}
              >
                Will Quinn
              </Typography>
              <Typography
                className="hi2"
                variant="subtitle2"
                component="subtitle2"
                color="#361aea"
                sx={{
                  fontSize: "1.5rem",
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  textAlign: "center",
                }}
              >
                <p sx={{ marginLeft: "-65%" }}>
                  Bachelor of Computer and Information Sciences in Software
                  Development
                </p>
              </Typography>
            </div>
          </IntroGrid>
          <PictureGrid item xs={4}>
            <div className="homeMiddle" sx={{ flexWrap: "wrap" }}>
              <img
                className="cloud1"
                src={cloudlg}
                alt="cloud"
                sx={{ width: 350, height: 350, marginLeft: "50%" }}
              />
              <Image
                className="me"
                alt="Will Quinn"
                src={me}
                sx={{
                  maxWidth: "350px",
                  maxHeight: "350px",
                  width: "auto",
                  height: "auto",
                  margin: "auto",
                  marginTop: "45%",
                  borderRadius: "50%",
                }}
              />
              <img className="cloud2" src={cloudmd} alt="cloud" />
            </div>
          </PictureGrid>
          <AboutGrid item xs={4}>
            <div
              className="homeAbout"
              sx={{
                margin: "25%",
                width: "100%",
                height: "auto",
                maxWidth: "100%",
              }}
            >
              <Typography
                className="homeText"
                variant="h2"
                component="h2"
                color="#361aea"
                sx={{ fontSize: "1.5rem", width: "max-content" }}
              >
                <p>A love for learning and a passion for technology.</p>
                <p>
                  Searching for opportunities to surround myself with great
                  people
                </p>
                <p>who can nurture my skills and grow my career.</p>
              </Typography>
            </div>
          </AboutGrid>
        </Grid>
      </MonitorBox>
      <MobileBox sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <div className="homeIntro">
            <Image
              className="me"
              alt="Will Quinn"
              src={me}
              sx={{
                maxHeight: "100%",
                maxWidth: "100%",
                textAlign: "center",
                marginTop: "-50%",
                marginLeft: "-10%",
                borderRadius: "50%",
                position: "absolute",
                zIndex: "-1",
              }}
            />
            <Box sx={{ marginTop: "-25%" }}>
              <Typography
                className="name"
                variant="h1"
                component="h1"
                color="#361aea"
                sx={{
                  fontSize: "2.5rem!important",
                  textAlign: "center",
                  marginLeft: "-10%",
                }}
              >
                Will Quinn
              </Typography>
              <Typography
                className="hi2"
                variant="subtitle2"
                component="subtitle2"
                color="#361aea"
                sx={{
                  fontSize: "1rem",
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  textAlign: "center",
                  marginLeft: "-5%",
                }}
              >
                <p sx={{ marginLeft: "-65%" }}>
                  Bachelor of Computer and Information Sciences in Software
                  Development
                </p>
              </Typography>
            </Box>
          </div>
          <div
            className="homeAbout"
            sx={{
              margin: "25%",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
            }}
          >
            <Typography
              className="homeText"
              variant="h2"
              component="h2"
              color="#361aea"
              sx={{ fontSize: "1.3rem", width: "100%" }}
            >
              <p>A love for learning and a passion for technology.</p>
              <p>
                Searching for opportunities to surround myself with great people
                who can nurture my skills and grow my career.
              </p>
            </Typography>
          </div>
        </Grid>
      </MobileBox>

      <div className="footerDiv2">
        <Footer />
      </div>
    </div>
  );
}
