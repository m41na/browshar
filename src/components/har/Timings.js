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

const Timings = ({ timings }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} id="timings_details">
      <Typography variant="subtitle1" component="h5">Timings</Typography>
      <Typography variant="body1" component="div">blocked: <span>{timings.blocked}</span></Typography>
      <Typography variant="body1" component="div">dns: <span>{timings.dns}</span></Typography>
      <Typography variant="body1" component="div">connect: <span>{timings.connect}</span></Typography>
      <Typography variant="body1" component="div">send: <span>{timings.send}</span></Typography>
      <Typography variant="body1" component="div">wait: <span>{timings.wait}</span></Typography>
      <Typography variant="body1" component="div">receive: <span>{timings.receive}</span></Typography>
      <Typography variant="body1" component="div">ssl: <span>{timings.ssl}</span></Typography>
      <Typography variant="body1" component="div">{timings.comment}</Typography>
    </Paper>
  );
};

export default Timings;
