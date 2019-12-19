// import { DataContext } from '../contexts/DataContext';
import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { DataContext } from '../contexts/DataContext';
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width: 345,
    padding: 5,
    margin: 5
  },
  media: {
    height: 240
  },
  root: {
    flexGrow: 1,
    marginTop: 100
  }
});

export default function MealsList() {
  const classes = useStyles();
  const { meals,  addToLike } = useContext(DataContext);
    console.log(meals)
  return (
    <Grid
      container
      className={classes.root}
      spacing={0}
      xs={12}
      justify="center"
      item={true}
    >
      {meals ?
         meals.map(item => {
            return (
              <Card className={classes.card} key={item.idMeal}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.strMealThumb}
                    title={item.strMeal}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.strMeal}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => addToLike(item.strMeal, item.strMealThumb)}>
                    Like
                  </Button>
                  <Button size="small" color="primary">
                    Show more
                  </Button>
                </CardActions>
              </Card>
            );
          }) : "No results"
       }
    </Grid>
  );
}
