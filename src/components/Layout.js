import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

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
  }
}));
export default function TemporaryDrawer() {
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
      onKeyDown={toggleDrawer(side, false)}
    >
      Category
      <Divider />
      Area
      <Divider />
      Tags
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
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
