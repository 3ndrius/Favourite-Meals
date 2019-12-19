import React, {useContext} from "react";
import { DataContext } from '../contexts/DataContext';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 300,
      [theme.breakpoints.down('xs')]: {
        width: 150  ,
        margin: theme.spacing(0.5),
      },
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const { value, handleChangeInput } = useContext(DataContext);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Search meal" variant="outlined" value={value} onChange={handleChangeInput} />
    </form>
  );
}