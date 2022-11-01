import * as React from "react";
import mapuche from "../assets/mapuche.png";
import homePage from "../assets/homepage.png";
import fliptracker from "../assets/fliptracker.png";
import budgetmate from "../assets/BudgetMate.png";
import speed from "../assets/speed.png";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavBar from "./shared/NavBar";
import Footer from "./shared/footer";
import Unicars from "../assets/UniCarspic.png";
import Box from "@mui/material/Box";
import "./css/projects.css";
//add parallax and get a better colour pallett
//add navBar to project

function Projects() {
  const Item = styled(Card)(() => ({
    boxShadow: "none",
    border: "none",
    borderRadius: 0,
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
    <div className="projects">
      <NavBar />
      <MonitorBox sx={{ width: "100%" }}>
        <Typography
          className="pageHeading"
          variant="h1"
          component="h1"
          color="#361aea"
          sx={{
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          Projects
        </Typography>
        <div className="projectCards" sx={{ marginBottom: "5%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Item
                sx={{
                  margin: "2%",
                  bgcolor: "#fcfcfd",
                }}
              >
                <Card
                  sx={{
                    maxWidth: "100%",
                    bgcolor: "#fcfcfd",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "95%",
                      margin: "2%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: "1%",
                      borderLeft: "5px solid #361aea",
                    }}
                    component="img"
                    alt="Mapuche School of Arts and Crafts website"
                    image={mapuche}
                    imageStyle={{ objectFit: "scale-down" }}
                    className="mapucheCard"
                  />
                  <CardContent
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                    }}
                  >
                    <Typography
                      className="typographyHeading"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      The Mapuche School of Arts and Crafts
                    </Typography>
                    <Typography
                      className="typographyBody"
                      variant="body2"
                      color="#361aea"
                    >
                      The Mapuche School of Arts and Crafts website was made for
                      international clients based in southern Chile with the
                      project being facilitated through Auckand University of
                      Technology. I and three other students created and oversaw
                      the development of the website. Using agile methodologies,
                      we spearheaded the development of the website from the
                      ground up. The website was built using the Material-UI
                      framework and React.js.
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                      border: "none",
                      borderRadius: "none",
                    }}
                  >
                    <div className="buttonContainer">
                      <Button
                        sx={{
                          color: "#fcfcfd",
                          bgcolor: "#361aea",
                          margin: "0.5rem",
                        }}
                        className="button"
                        size="small"
                        href="https://mapuche-art.web.app/"
                        target="_blank"
                      >
                        View Website
                      </Button>
                      <Button
                        sx={{
                          color: "#fcfcfd",
                          bgcolor: "#361aea",
                          margin: "0.5rem",
                        }}
                        className="button"
                        size="small"
                        href="https://github.com/maxventer00/mapuche-art-school"
                        target="_blank"
                      >
                        View Repository
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              </Item>
              <Item
                sx={{
                  margin: "2%",
                  bgcolor: "#fcfcfd",
                }}
              >
                <Card
                  sx={{
                    maxWidth: "100%",
                    bgcolor: "#fcfcfd",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "95%",
                      margin: "2%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: "1%",
                      borderLeft: "5px solid #361aea",
                    }}
                    component="img"
                    alt="Will Quinn portfolio Homepage"
                    image={homePage}
                    imageStyle={{ objectFit: "scale-down" }}
                    className="portfolioCard"
                  />
                  <CardContent
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                    }}
                  >
                    <Typography
                      className="typographyHeading"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Will Quinn Portfolio Website
                    </Typography>
                    <Typography
                      className="typographyBody"
                      variant="body2"
                      color="#361aea"
                    >
                      My portfolio website was made to showcase my skills and
                      projects. It was made using the Material-UI framework and
                      React.js. My plan is for this to be an on-going project,
                      so I will be updating the website as I learn more about
                      React, JavaScript, and Material-UI. I will definitely try
                      to add in some javascript functionality to the website
                      where I can.
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                      border: "none",
                      borderRadius: "none",
                    }}
                  >
                    <div className="buttonContainer">
                      <Button
                        sx={{
                          color: "#fcfcfd",
                          bgcolor: "#361aea",
                          margin: "0.5rem",
                        }}
                        className="button"
                        size="small"
                        href="https://willquinn.netlify.app/"
                        target="_blank"
                      >
                        View Website
                      </Button>
                      <Button
                        sx={{
                          color: "#fcfcfd",
                          bgcolor: "#361aea",
                          margin: "0.5rem",
                        }}
                        className="button"
                        size="small"
                        href="https://github.com/Will-Quinn/WillQuinnPortfolio"
                        target="_blank"
                      >
                        View Repository
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                sx={{
                  margin: "2%",
                  bgcolor: "#fcfcfd",
                }}
              >
                <Card
                  ClassName="card"
                  sx={{
                    maxWidth: "100%",
                    bgcolor: "#fcfcfd",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "95%",
                      margin: "2%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: "1%",
                      borderLeft: "5px solid #361aea",
                    }}
                    component="img"
                    alt="Software Practice Empirical Evidence Database"
                    image={speed}
                    imageStyle={{ objectFit: "scale-down" }}
                    className="speedCard"
                  />
                  <CardContent
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                      borderRadius: "none",
                    }}
                  >
                    <Typography
                      className="typographyHeading"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Software Practice Empirical Evidence Database
                    </Typography>
                    <Typography
                      className="typographyBody"
                      variant="body2"
                      color="#361aea"
                    >
                      The Software Practice Empirical Evidence Database or SPEED
                      was a project made at Auckand University of Technology
                      with me and two other students. The goal of the project
                      was to create a MERN stack website that focused around the
                      use of databases and creating different user states to be
                      able to have access to different parts of the website and
                      to manipulate data based on user states.
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                      border: "none",
                      borderRadius: "none",
                    }}
                  >
                    <div className="buttonContainer">
                      <Button
                        sx={{
                          color: "#fcfcfd",
                          bgcolor: "#361aea",
                          margin: "0.5rem",
                        }}
                        className="button"
                        size="small"
                        href="https://speed-cise-team7.herokuapp.com/"
                        target="_blank"
                      >
                        View Website
                      </Button>
                      <Button
                        sx={{
                          color: "#fcfcfd",
                          bgcolor: "#361aea",
                          margin: "0.5rem",
                        }}
                        className="button"
                        size="small"
                        href="https://github.com/Will-Quinn/SPEED_Assgt1B"
                        target="_blank"
                      >
                        View Repository
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              </Item>
              <Item
                sx={{
                  margin: "2%",
                  bgcolor: "#fcfcfd",
                }}
              >
                <Card
                  sx={{
                    maxWidth: "100%",
                    bgcolor: "#fcfcfd",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "95%",
                      margin: "2%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: "1%",
                      borderLeft: "5px solid #361aea",
                    }}
                    component="img"
                    alt="Will Quinn portfolio Homepage"
                    image={fliptracker}
                    imageStyle={{ objectFit: "scale-down" }}
                    className="fliptrackerCard"
                  />
                  <CardContent
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                    }}
                  >
                    <Typography
                      className="typographyHeading"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Flip Tracker
                    </Typography>
                    <Typography
                      className="typographyBody"
                      variant="body2"
                      color="#361aea"
                    >
                      The Flip Tracker is a project for my own personal use to
                      keep track of my flips, buying and selling items on the
                      market within the game Runescape. This will be made using
                      the MERN stack and will make use of MongoDB databases and
                      javascript functions needed for calculations and data
                      manipulation. (With netlify hosting MongoDB isnt working)
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                      border: "none",
                      borderRadius: "none",
                    }}
                  >
                    <div className="buttonContainer">
                      <Button
                        sx={{
                          color: "#fcfcfd",
                          bgcolor: "#361aea",
                          margin: "0.5rem",
                        }}
                        className="button"
                        size="small"
                        href="https://fliptracker.netlify.app/"
                        target="_blank"
                      >
                        View Website
                      </Button>
                      <Button
                        sx={{
                          color: "#fcfcfd",
                          bgcolor: "#361aea",
                          margin: "0.5rem",
                        }}
                        className="button"
                        size="small"
                        href="https://github.com/Will-Quinn/FlipTracker"
                        target="_blank"
                      >
                        View Repository
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                sx={{
                  margin: "2%",
                  bgcolor: "#fcfcfd",
                }}
              >
                <Card
                  ClassName="card"
                  sx={{
                    maxWidth: "100%",
                    bgcolor: "#fcfcfd",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "95%",
                      margin: "2%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: "1%",
                      borderLeft: "5px solid #361aea",
                    }}
                    component="img"
                    alt="BudgetMate"
                    image={budgetmate}
                    imageStyle={{ objectFit: "scale-down" }}
                    className="budgetmateCard"
                  />
                  <CardContent
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                      borderRadius: "none",
                    }}
                  >
                    <Typography
                      className="typographyHeading"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      BudgetMate
                    </Typography>
                    <Typography
                      className="typographyBody"
                      variant="body2"
                      color="#361aea"
                    >
                      BudgetMate was a project that I decided to undertake
                      recently when I was asked by a family member to do their
                      budgetting on Excel spreadsheets. I told them I could make
                      them a website that does the same thing which will be
                      easier to use when I'm not there to guide them. I plan to
                      add much more to the project so that everything they could
                      possibly need is covered.
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                      border: "none",
                      borderRadius: "none",
                    }}
                  >
                    <div className="buttonContainer">
                      <Button
                        sx={{
                          color: "#fcfcfd",
                          bgcolor: "#361aea",
                          margin: "0.5rem",
                        }}
                        className="button"
                        size="small"
                        href="https://budgetmate.netlify.app/"
                        target="_blank"
                      >
                        View Website
                      </Button>
                      <Button
                        sx={{
                          color: "#fcfcfd",
                          bgcolor: "#361aea",
                          margin: "0.5rem",
                        }}
                        className="button"
                        size="small"
                        href="https://github.com/Will-Quinn/budgetMate"
                        target="_blank"
                      >
                        View Repository
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                sx={{
                  margin: "2%",
                  bgcolor: "#fcfcfd",
                }}
              >
                <Card
                  ClassName="card"
                  sx={{
                    maxWidth: "100%",
                    bgcolor: "#fcfcfd",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "95%",
                      margin: "2%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: "1%",
                      borderLeft: "5px solid #361aea",
                    }}
                    component="img"
                    alt="Unicars"
                    image={Unicars}
                    imageStyle={{ objectFit: "scale-down" }}
                    className="UnicarsCard"
                  />
                  <CardContent
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                      borderRadius: "none",
                    }}
                  >
                    <Typography
                      className="typographyHeading"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      UniCars
                    </Typography>
                    <Typography
                      className="typographyBody"
                      variant="body2"
                      color="#361aea"
                    >
                      Unicars is a project that I and a team of 2 other students
                      developed in 2021 during our first web development paper
                      at uni. This was our first taste of web development which
                      is reflected in the quality of the website. The project
                      was intended to be a car dealership website aimed at
                      students. We used Javasript, HTML and CSS for the frontend
                      and AJAX PHP for the back end, and made use of googles
                      login and maps api's.
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      bgcolor: "#fcfcfd",
                      color: "#361aea",
                      border: "none",
                      borderRadius: "none",
                    }}
                  >
                    <div className="buttonContainer">
                      <Button
                        sx={{
                          color: "#fcfcfd",
                          bgcolor: "#361aea",
                          margin: "0.5rem",
                        }}
                        className="button"
                        size="small"
                        href="https://github.com/Will-Quinn/UniCars2021"
                        target="_blank"
                      >
                        View Repository
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </div>
      </MonitorBox>
      <MobileBox sx={{ width: "100%" }}>
        <Typography
          className="pageHeadingM"
          variant="h1"
          component="h1"
          color="#361aea"
          sx={{
            marginBottom: "15%",
          }}
        >
          Projects
        </Typography>
        <div className="projectCards" sx={{ marginBottom: "5%" }}>
          <Item
            sx={{
              margin: "2%",
              bgcolor: "#fcfcfd",
            }}
          >
            <Card
              sx={{
                maxWidth: "100%",
                bgcolor: "#fcfcfd",
              }}
            >
              <CardMedia
                sx={{
                  width: "95%",
                  margin: "2%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "1%",
                  borderLeft: "5px solid #361aea",
                }}
                component="img"
                alt="Mapuche School of Arts and Crafts website"
                image={mapuche}
                imageStyle={{ objectFit: "scale-down" }}
                className="mapucheCard"
              />
              <CardContent
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                }}
              >
                <Typography
                  className="typographyHeading"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  The Mapuche School of Arts and Crafts
                </Typography>
                <Typography
                  className="typographyBody"
                  variant="body2"
                  color="#361aea"
                >
                  The Mapuche School of Arts and Crafts website was made for
                  international clients based in southern Chile with the project
                  being facilitated through Auckand University of Technology. I
                  and three other students created and oversaw the development
                  of the website. Using agile methodologies, we spearheaded the
                  development of the website from the ground up. The website was
                  built using the Material-UI framework and React.js.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                  border: "none",
                  borderRadius: "none",
                }}
              >
                <div className="buttonContainer">
                  <Button
                    sx={{
                      color: "#fcfcfd",
                      bgcolor: "#361aea",
                      margin: "0.5rem",
                    }}
                    className="button"
                    size="small"
                    href="https://mapuche-art.web.app/"
                    target="_blank"
                  >
                    View Website
                  </Button>
                  <Button
                    sx={{
                      color: "#fcfcfd",
                      bgcolor: "#361aea",
                      margin: "0.5rem",
                    }}
                    className="button"
                    size="small"
                    href="https://github.com/maxventer00/mapuche-art-school"
                    target="_blank"
                  >
                    View Repository
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Item>
          <Item
            sx={{
              margin: "2%",
              bgcolor: "#fcfcfd",
            }}
          >
            <Card
              sx={{
                maxWidth: "100%",
                bgcolor: "#fcfcfd",
              }}
            >
              <CardMedia
                sx={{
                  width: "95%",
                  margin: "2%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "1%",
                  borderLeft: "5px solid #361aea",
                }}
                component="img"
                alt="Will Quinn portfolio Homepage"
                image={homePage}
                imageStyle={{ objectFit: "scale-down" }}
                className="portfolioCard"
              />
              <CardContent
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                }}
              >
                <Typography
                  className="typographyHeading"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Will Quinn Portfolio Website
                </Typography>
                <Typography
                  className="typographyBody"
                  variant="body2"
                  color="#361aea"
                >
                  My portfolio website was made to showcase my skills and
                  projects. It was made using the Material-UI framework and
                  React.js. My plan is for this to be an on-going project, so I
                  will be updating the website as I learn more about React,
                  JavaScript, and Material-UI. I will definitely try to add in
                  some javascript functionality to the website where I can.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                  border: "none",
                  borderRadius: "none",
                }}
              >
                <div className="buttonContainer">
                  <Button
                    sx={{
                      color: "#fcfcfd",
                      bgcolor: "#361aea",
                      margin: "0.5rem",
                    }}
                    className="button"
                    size="small"
                    href="https://willquinn.netlify.app/"
                    target="_blank"
                  >
                    View Website
                  </Button>
                  <Button
                    sx={{
                      color: "#fcfcfd",
                      bgcolor: "#361aea",
                      margin: "0.5rem",
                    }}
                    className="button"
                    size="small"
                    href="https://github.com/Will-Quinn/WillQuinnPortfolio"
                    target="_blank"
                  >
                    View Repository
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Item>
          <Item
            sx={{
              margin: "2%",
              bgcolor: "#fcfcfd",
            }}
          >
            <Card
              ClassName="card"
              sx={{
                maxWidth: "100%",
                bgcolor: "#fcfcfd",
              }}
            >
              <CardMedia
                sx={{
                  width: "95%",
                  margin: "2%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "1%",
                  borderLeft: "5px solid #361aea",
                }}
                component="img"
                alt="Software Practice Empirical Evidence Database"
                image={speed}
                imageStyle={{ objectFit: "scale-down" }}
                className="speedCard"
              />
              <CardContent
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                  borderRadius: "none",
                }}
              >
                <Typography
                  className="typographyHeading"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Software Practice Empirical Evidence Database
                </Typography>
                <Typography
                  className="typographyBody"
                  variant="body2"
                  color="#361aea"
                >
                  The Software Practice Empirical Evidence Database or SPEED was
                  a project made at Auckand University of Technology with me and
                  two other students. The goal of the project was to create a
                  MERN stack website that focused around the use of databases
                  and creating different user states to be able to have access
                  to different parts of the website and to manipulate data based
                  on user states.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                  border: "none",
                  borderRadius: "none",
                }}
              >
                <div className="buttonContainer">
                  <Button
                    sx={{
                      color: "#fcfcfd",
                      bgcolor: "#361aea",
                      margin: "0.5rem",
                    }}
                    className="button"
                    size="small"
                    href="https://speed-cise-team7.herokuapp.com/"
                    target="_blank"
                  >
                    View Website
                  </Button>
                  <Button
                    sx={{
                      color: "#fcfcfd",
                      bgcolor: "#361aea",
                      margin: "0.5rem",
                    }}
                    className="button"
                    size="small"
                    href="https://github.com/Will-Quinn/SPEED_Assgt1B"
                    target="_blank"
                  >
                    View Repository
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Item>
          <Item
            sx={{
              margin: "2%",
              bgcolor: "#fcfcfd",
            }}
          >
            <Card
              sx={{
                maxWidth: "100%",
                bgcolor: "#fcfcfd",
              }}
            >
              <CardMedia
                sx={{
                  width: "95%",
                  margin: "2%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "1%",
                  borderLeft: "5px solid #361aea",
                }}
                component="img"
                alt="Will Quinn portfolio Homepage"
                image={fliptracker}
                imageStyle={{ objectFit: "scale-down" }}
                className="fliptrackerCard"
              />
              <CardContent
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                }}
              >
                <Typography
                  className="typographyHeading"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Flip Tracker
                </Typography>
                <Typography
                  className="typographyBody"
                  variant="body2"
                  color="#361aea"
                >
                  The Flip Tracker is a project for my own personal use to keep
                  track of my flips, buying and selling items on the market
                  within the game Runescape. This will be made using the MERN
                  stack and will make use of MongoDB databases and javascript
                  functions needed for calculations and data manipulation. (With
                  netlify hosting MongoDB isnt working)
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                  border: "none",
                  borderRadius: "none",
                }}
              >
                <div className="buttonContainer">
                  <Button
                    sx={{
                      color: "#fcfcfd",
                      bgcolor: "#361aea",
                      margin: "0.5rem",
                    }}
                    className="button"
                    size="small"
                    href="https://fliptracker.netlify.app/"
                    target="_blank"
                  >
                    View Website
                  </Button>
                  <Button
                    sx={{
                      color: "#fcfcfd",
                      bgcolor: "#361aea",
                      margin: "0.5rem",
                    }}
                    className="button"
                    size="small"
                    href="https://github.com/Will-Quinn/FlipTracker"
                    target="_blank"
                  >
                    View Repository
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Item>
          <Item
            sx={{
              margin: "2%",
              bgcolor: "#fcfcfd",
            }}
          >
            <Card
              ClassName="card"
              sx={{
                maxWidth: "100%",
                bgcolor: "#fcfcfd",
              }}
            >
              <CardMedia
                sx={{
                  width: "95%",
                  margin: "2%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "1%",
                  borderLeft: "5px solid #361aea",
                }}
                component="img"
                alt="BudgetMate"
                image={budgetmate}
                imageStyle={{ objectFit: "scale-down" }}
                className="budgetmateCard"
              />
              <CardContent
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                  borderRadius: "none",
                }}
              >
                <Typography
                  className="typographyHeading"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  BudgetMate
                </Typography>
                <Typography
                  className="typographyBody"
                  variant="body2"
                  color="#361aea"
                >
                  BudgetMate was a project that I decided to undertake recently
                  when I was asked by a family member to do their budgetting on
                  Excel spreadsheets. I told them I could make them a website
                  that does the same thing which will be easier to use when I'm
                  not there to guide them. I plan to add much more to the
                  project so that everything they could possibly need is
                  covered.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                  border: "none",
                  borderRadius: "none",
                }}
              >
                <div className="buttonContainer">
                  <Button
                    sx={{
                      color: "#fcfcfd",
                      bgcolor: "#361aea",
                      margin: "0.5rem",
                    }}
                    className="button"
                    size="small"
                    href="https://budgetmate.netlify.app/"
                    target="_blank"
                  >
                    View Website
                  </Button>
                  <Button
                    sx={{
                      color: "#fcfcfd",
                      bgcolor: "#361aea",
                      margin: "0.5rem",
                    }}
                    className="button"
                    size="small"
                    href="https://github.com/Will-Quinn/budgetMate"
                    target="_blank"
                  >
                    View Repository
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Item>
          <Item
            sx={{
              margin: "2%",
              bgcolor: "#fcfcfd",
            }}
          >
            <Card
              ClassName="card"
              sx={{
                maxWidth: "100%",
                bgcolor: "#fcfcfd",
              }}
            >
              <CardMedia
                sx={{
                  width: "95%",
                  margin: "2%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "1%",
                  borderLeft: "5px solid #361aea",
                }}
                component="img"
                alt="Unicars"
                image={Unicars}
                imageStyle={{ objectFit: "scale-down" }}
                className="UnicarsCard"
              />
              <CardContent
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                  borderRadius: "none",
                }}
              >
                <Typography
                  className="typographyHeading"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  UniCars
                </Typography>
                <Typography
                  className="typographyBody"
                  variant="body2"
                  color="#361aea"
                >
                  Unicars is a project that I and a team of 2 other students
                  developed in 2021 during our first web development paper at
                  uni. This was our first taste of web development which is
                  reflected in the quality of the website. The project was
                  intended to be a car dealership website aimed at students. We
                  used Javasript, HTML and CSS for the frontend and AJAX PHP for
                  the back end, and made use of googles login and maps api's.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  bgcolor: "#fcfcfd",
                  color: "#361aea",
                  border: "none",
                  borderRadius: "none",
                }}
              >
                <div className="buttonContainer">
                  <Button
                    sx={{
                      color: "#fcfcfd",
                      bgcolor: "#361aea",
                      margin: "0.5rem",
                    }}
                    className="button"
                    size="small"
                    href="https://github.com/Will-Quinn/UniCars2021"
                    target="_blank"
                  >
                    View Repository
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Item>
        </div>
      </MobileBox>
      <div className="footerDiv">
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
