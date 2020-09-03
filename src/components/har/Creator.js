import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Creator = ({ creator }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="creator_details">
      <div id="creator_name">{creator.name}</div>
      <div id="creator_version">{creator.version}</div>
      <div id="creator_comment">{creator?.comment}</div>
    </Paper>
  );
};

export default Creator;
