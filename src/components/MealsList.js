import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import { DataContext } from "../contexts/DataContext";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width: 345,
    height: "auto",
    padding: 5,
    margin: 5
  },
  media: {
    height: 240
  },
  root: {
    flexGrow: 1,
    marginTop: 100
  },
  moreInfo: {
    height: 390,
    width: "100%",
    position: "absolute",
    margin: 5,
    bottom: 0,
    background: "red"
  },
  detail: {
    position: "relative",
    display: "flex",
    alignItems: "stretch"
  },
  alt: {
    height: 200,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function MealsList() {
  const classes = useStyles();
  const { meals, addToLike, showSingleMeal, singleMeal } = useContext(
    DataContext
  );
  return (
    <Grid
      container
      className={classes.root}
      spacing={0}
      xs={12}
      justify="center"
      item={true}
    >
      {meals ? (
        meals.map(item => {
          const more = item.more ? "100%" : "345px";
          const changer = item.changer ? "0.5" : "1";
          const expanded = item.more ? true : false;

          return (
            <Card
              className={classes.card}
              key={item.idMeal}
              style={{ opacity: changer, height: more }}
            >
              <CardActionArea
                onClick={() => {
                  showSingleMeal(item.strMeal);
                }}
              >
                <CardMedia
                  className={classes.media}
                  image={`${item.strMealThumb}/preview`}
                  title={item.strMeal}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.strMeal}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => addToLike(item.strMeal, item.strMealThumb)}
                >
                  Like
                </Button>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Instruction:
                  </Typography>
                  <Typography paragraph>
                    {singleMeal.strInstructions}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
        })
      ) : (
        <Card className={classes.alt}> No meals found! </Card>
      )}
    </Grid>
  );
}
