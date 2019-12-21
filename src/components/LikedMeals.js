import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { DataContext } from "../contexts/DataContext";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
  content: {
    padding: 15
  },
  fav: {
    borderRadius: 2,
    background: "transparent",
    zIndex: 6
  },
  card: {},
  media: {
    height: 40,
    width: 40
  },
  set: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    alignItems: "center"
  },
  alt: {
    height: 200,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));
export default function LikedMeals() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { liked, showSingleMeal, clicked } = useContext(DataContext);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <BottomNavigation
        value={"Favorite"}
        className={classes.fav}
        showLabels
        onClick={handleClick}
      >
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon className={classes.clr} />}
        />
      </BottomNavigation>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Box>
          {liked.length ? (
            liked.map((item, key) => {
              const noClick = clicked ? 'none' : 'auto' 
              return (
                <Card className={classes.card} key={key}>
                  <CardActionArea
                    className={classes.set}
                    onClick={() => showSingleMeal(item[0])}
                    style={{pointerEvents: noClick}}
                  >
                    <CardMedia
                      className={classes.media}
                      image={item[1]}
                      title={item[0]}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h6">
                        {item[0]}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })
          ) : (
            <Card className={classes.alt}> No meals found! </Card>
          )}
        </Box>
      </Popover>
    </div>
  );
}
