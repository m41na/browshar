import React from 'react';
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

const Browser = ({browser}) => {

    const classes = useStyles();
    return (
        <Paper elevation={2} className={classes.paper} id="browser_details">
            <div id='browser_name'>{browser.name}</div>
            <div id='browser_version'>{browser.version}</div>
            <div id='browser_comment'>{browser.comment}</div>
        </Paper>
    )
}

export default Browser;