import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Paper from "@material-ui/core/Paper";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
const useStyles = makeStyles(theme => ({
  content: {
    padding: 15
  },
  fav: {
    borderRadius: 2,
    background: "transparent",
    zIndex: 6
  }
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

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
        <Paper className={classes.content}>
          <Typography className={classes.typography}>
            The content of the Popover.
          </Typography>
          <Typography className={classes.typography}>
            The content of the Popover.
          </Typography>
          <Typography className={classes.typography}>
            The content of the Popover.
          </Typography>
          <Typography className={classes.typography}>
            The content of the Popover.
          </Typography>
        </Paper>
      </Popover>
    </div>
  );
}
