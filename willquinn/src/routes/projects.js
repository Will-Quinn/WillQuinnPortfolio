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


function Projects() {
const Item = styled(Card)(() => ({
}));
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Item sx={{ margin: "2%"}}>
          <Card sx={{ maxWidth: "100%", }}>
          <CardMedia
            component="img"
            alt="Mapuche School of Arts and Crafts website"
            height="25%"
            image={mapuche}
            imageStyle={{ objectFit: 'scale-down' }}
            className="mapucheCard"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              The Mapuche School of Arts and Crafts
            </Typography>
            <Typography variant="body2" color="text.secondary" height={"50%"}>
              The Mapuche School of Arts and Crafts website was made for international clients based in southern Chile with the project being facilitated through
              Auckand University of Technology. I and three other students created and oversaw the development of the website. Using agile methodologies, we
              spearheaded the development of the website from the ground up. The website was built using the Material-UI framework and React.js.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://mapuche-art.web.app/'>Visit</Button>
          </CardActions>
        </Card>
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item sx={{ margin: "2%"}}>
          <Card sx={{ maxWidth: "100%" }}>
          <CardMedia
            component="img"
            alt="Software Practice Empirical Evidence Database"
            height="25%"
            image={speed}
            imageStyle={{ objectFit: 'scale-down' }}
            className="mapucheCard"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Software Practice Empirical Evidence Database
            </Typography>
            <Typography variant="body2" color="text.secondary" height={"20%"}>
              The Software Practice Empirical Evidence Database or SPEED was a project made at Auckand University of Technology with me and two other students. The goal of the project was
              to create a MERN stack website that focused around the use of databases and creating different user states to be able to have access to different parts of the website and to manipulate
              data based on user states. In the near future I plan to improve this website through the implementation of Material-UI to be able to style the pre-built components better.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://speed-cise-team7.herokuapp.com/'>Visit</Button>
          </CardActions>
        </Card>
        </Item>
      </Grid>
    </Grid>
  );
}

export default Projects;