import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      maxWidth: 300,
      textAlign: 'center',
    },
    media: {
      height: 200,
      width: 200,
      borderRadius:100,
      marginLeft: 'auto', // used to center image on card
      marginRight:'auto'
    },
});

export default function StudentCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.placecage.com/200/300"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Nicolas Cage
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Computer Science Major at UVA <br/>  
              Github: https://github.com/mawilliams098 <br/>
              LinkedIn: https://www.linkedin.com/feed/
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
