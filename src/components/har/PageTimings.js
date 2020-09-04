import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    row_even: {
      backgroundColor: grey[400],
      padding: 10
    },
    row_odd: {
      backgroundColor: grey[200],
      padding: 10
    },
  }));

const PageTimings = ({pageTimings}) => {

    const classes = useStyles();

    return (
         <Paper className={classes.paper} id="pageTimings_details">
            <Typography variant="body1" component="div" className={classes.row_even}>onContentLoad: <span>{pageTimings.onContentLoad}</span></Typography>
            <Typography variant="body1" component="div" className={classes.row_odd}>onLoad: <span>{pageTimings.onLoad}</span></Typography>
            <Typography variant="body1" component="div" className={classes.row_even}>{pageTimings.comment}</Typography>
        </Paper>
    )
}

export default PageTimings;