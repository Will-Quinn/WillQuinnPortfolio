import * as React from 'react';
import mapuche from '../assets/mapuche.png';
import speed from '../assets/speed.png';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from './shared/NavBar';

//add parallax and get a better colour pallett
//add navBar to project

function Projects() {
const Item = styled(Card)(() => ({
  boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.4)"
}));
  return (
    <div className="projects">
      <div className="animatedGradient">
      <NavBar />
      <Typography className="pageHeading" variant="h1" component="h1" color="white"
      sx={{ 
      marginTop: "5%"}}>
        Projects
      </Typography>
      </div>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Item sx={{ 
                margin: "2%", bgcolor: "#05668D"}}>
                <Card sx={{ 
                  maxWidth: "100%", 
                  bgcolor: "#05668D",
                  }}>
                <CardMedia sx={{ 
                  width: "95%", 
                  margin: "2%", 
                  marginLeft: "auto", 
                  marginRight: "auto"}}
                  component="img"
                  alt="Mapuche School of Arts and Crafts website"
                  image={mapuche}
                  imageStyle={{objectFit: 'scale-down'}}
                  className="mapucheCard"
                />
                <CardContent sx={{ 
                  bgcolor: "#028090",
                  color: "#fff"}}>
                  <Typography className = "typographyHeading" gutterBottom variant="h5" component="div">
                    The Mapuche School of Arts and Crafts
                  </Typography>
                  <Typography className = "typographyBody" variant="body2" color="white">
                    The Mapuche School of Arts and Crafts website was made for international clients based in southern Chile with the project being facilitated through
                    Auckand University of Technology. I and three other students created and oversaw the development of the website. Using agile methodologies, we
                    spearheaded the development of the website from the ground up. The website was built using the Material-UI framework and React.js.
                  </Typography>
                </CardContent>
                <CardActions sx={{ 
                  bgcolor: "#00A896", 
                  color: "#fff", 
                  alignItems: "center"}}>
                  <Button sx={{ color: "#05668D", marginLeft: "27%"}} className = "button" size="small" href='https://mapuche-art.web.app/'>View Website</Button>
                  <Button sx={{ color: "#05668D", marginLeft: "27%"}} className = "button" size="small" href='https://github.com/maxventer00/mapuche-art-school'>View Repository</Button>
                </CardActions>
              </Card>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ 
              margin: "2%",
              bgcolor: "#05668D"}}>
                <Card ClassName = "card" sx={{ 
                maxWidth: "100%",
                bgcolor: "#05668D"}}>
                <CardMedia sx={{
                  width: "95%",
                  margin: "2%",
                  marginLeft: "auto",
                  marginRight: "auto"}}
                  component="img"
                  alt="Software Practice Empirical Evidence Database"
                  image={speed}
                  imageStyle={{ objectFit: 'scale-down' }}
                  className="mapucheCard"
                />
                <CardContent sx={{ 
                  bgcolor: "#028090",
                  color: "#fff"}}>
                  <Typography className = "typographyHeading" gutterBottom variant="h5" component="div">
                    Software Practice Empirical Evidence Database
                  </Typography>
                  <Typography className = "typographyBody" variant="body2" color="white">
                    The Software Practice Empirical Evidence Database or SPEED was a project made at Auckand University of Technology with me and two other students. The goal of the project was
                    to create a MERN stack website that focused around the use of databases and creating different user states to be able to have access to different parts of the website and to manipulate
                    data based on user states. 
                  </Typography>
                </CardContent>
                <CardActions sx={{ 
                bgcolor: "#00A896",
                color: "#fff"}}>
                  <Button sx={{ color: "#05668D", marginLeft: "33%"}} className = "button" size="small" href='https://speed-cise-team7.herokuapp.com/'>View Website</Button>
                  <Button sx={{ color: "#05668D", marginLeft: "33%"}} className = "button" size="small" href='https://github.com/Will-Quinn/SPEED_Assgt1B'>View Repository</Button>
                </CardActions>
              </Card>
              </Item>
            </Grid>
          </Grid>
        </div>
  );
}

export default Projects;