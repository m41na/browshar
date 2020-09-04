import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Request from "./Request";
import Response from "./Response";
import Cache from "./Cache";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  row_even: {
    backgroundColor: grey[300],
    padding: 10
  },
  row_odd: {
    backgroundColor: grey[100],
    padding: 10
  },
}));

const Entries = ({ entries }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="entries_details">
      <Typography variant="h5" component="h2">
        Entry
      </Typography>
      <Typography variant="body1" component="div" className={classes.row_even}>
        pageref: <span>{entries.pageref}</span>
      </Typography>
      <Typography variant="body1" component="div" className={classes.row_off}>
        startedDateTime: <span>{entries.startedDateTime}</span>
      </Typography>
      <Typography variant="body1" component="div" className={classes.row_even}>
        time: <span>{entries.time}</span>
      </Typography>
      <Request request={entries.request} />
      <Response response={entries.response} />
      {entries?.cache && <Cache cache={entries.cache} />}
      <Typography variant="body1" component="div" className={classes.row_odd}>
        serverIPAddress: <span>{entries.serverIPAddress}</span>
      </Typography>
      <Typography variant="body1" component="div" className={classes.row_even}>
        connection: <span>{entries.connection}</span>
      </Typography>
      <Typography variant="body1" component="div" className={classes.row_odd}>
        {entries.comment}
      </Typography>
    </Paper>
  );
};

export default React.memo(Entries);
