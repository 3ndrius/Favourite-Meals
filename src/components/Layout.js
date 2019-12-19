import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MealsList from './MealsList';
import { DataContext } from '../contexts/DataContext';

import LikedMeals from './LikedMeals';
import SearchInput from './SearchInput';


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    background: "#fff176"
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },

  menu: {
    display: "flex",
    justifyContent: "space-between",
    background: "#fff176",
    color: "black"
  },
  heading: {
    padding: 16
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  popup: {
    width: 300,
    margin: 5,
    padding: 15,
    zIndex: 100
  },
  content: {
    padding: 15
  },

  sort: {
   
    padding: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
 

}));


export default function TemporaryDrawer() {

  const { meals, handleDelete, addToLike } = useContext(DataContext);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}>


    <Box className={classes.sort}>
    
    <Typography variant="h5" className={classes.heading}>
    Category
  </Typography>
    {meals && meals.map(meal => {
      const info = 'category'
      return (
        <Chip
          key={meal.idMeal} 
          label={meal.strCategory}
          className={classes.chip}
          onDelete={() => handleDelete(meal.strCategory, info)}
        />
      );
    })}
    </Box>
      <Divider />
      <Box className={classes.sort}>
    
      <Typography variant="h5" className={classes.heading}>
      Area
    </Typography>
      {meals && meals.map(meal => {
        const info = 'area'
        return (
          <Chip
            key={meal.idMeal} 
            label={meal.strArea}
            className={classes.chip}
            onDelete={() => handleDelete(meal.strArea, info)}
          />
        );
      })}
      </Box>
      <Divider />
      <Box className={classes.sort}>
    
      <Typography variant="h5" className={classes.heading}>
      Tags
    </Typography>
      {meals && meals.map(meal => {
        const info = 'tag';
        return (
          <Chip
            key={meal.idMeal} 
            label={meal.strTags ? meal.strTags : 'No tags'}
            className={classes.chip}
            onDelete={() => handleDelete(meal.strTags, info)}
          />
        );
      })}
      </Box>
    </div>
  );
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.menu}>
          <Button onClick={toggleDrawer("left", true)}>
            {" "}
            <MenuIcon />
          </Button>
          <SearchInput />
          <LikedMeals />
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>

      <div>
        <MealsList data={meals} addToLike={addToLike}/>
      </div>
    </div>
  );
}
