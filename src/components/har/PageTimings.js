import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }));

const PageTimings = ({pageTimings}) => {

    const classes = useStyles();

    return (
         <Paper className={classes.paper} id="pageTimings_details">
            <Typography variant="body1" component="div">onContentLoad: <span>{pageTimings.onContentLoad}</span></Typography>
            <Typography variant="body1" component="div">onLoad: <span>{pageTimings.onLoad}</span></Typography>
            <Typography variant="body1" component="div">{pageTimings.comment}</Typography>
        </Paper>
    )
}

export default PageTimings;