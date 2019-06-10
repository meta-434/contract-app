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
      maxWidth: 345,
    },
    media: {
      height: 200,
      width: 200,
      borderRadius:100
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
              Github: https://github.com/mawilliams098 <br/>
              LinkedIn: https://www.linkedin.com/feed/
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
