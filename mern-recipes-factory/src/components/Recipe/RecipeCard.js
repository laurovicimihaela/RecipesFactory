import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import CardActions from "@mui/material/CardActions";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const JoinButton = styled(Button)({
    backgroundColor: "#F6C035",
    color: "white",
    "&:hover": {
      backgroundColor: "#F6C035",
    },
    "&:disabled": {
      color: "white",
      backgroundColor: "grey",
    },
  });

function RecipeCard({ name, duration, difficulty, noOfPortions, img }) {

    return (
      <Container>
      <Card sx={{ minWidth: 250, backgroundColor: '#fff' }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 25, fontWeight: 'bold' }} color="black" gutterBottom>
          {name}
        </Typography>
        <CardMedia
        component="img"
        height="140"
        image= {img}
      />
        <Typography sx={{ mb: 1.5 }} variant="h8" component="div" color="black">
          Duration: {duration}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h8" component="div" color="black">
          Difficulty: {difficulty} 
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h8" component="div" color="black">
          Portions: {noOfPortions} 
        </Typography>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <JoinButton >Vezi Reteta</JoinButton>
          </CardActions>
      </CardContent>
      </Card>
      </Container>
    );
  }
  
  export default RecipeCard;