import React from "react";
import Request from "./Request";
import Response from "./Response";
import Cache from "./Cache";
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

const Entries = ({ entries }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="entries_details">
      <div id="entries_pageref">{entries.version}</div>
      <div id="entries_startedDateTimer">{entries.startedDateTime}</div>
      <div id="entries_timer">{entries.time}</div>
      <Request request={entries.request} />
      <Response response={entries.response} />
      {entries?.cache && <Cache cache={entries.cache} />}
      <div id="entries_timings">timings</div>
      <div id="entries_serverIPAddress">{entries.serverIPAddress}</div>
      <div id="entries_connection">{entries.connection}</div>
      <div id="entries_commentn">{entries.comment}</div>
    </Paper>
  );
};

export default Entries;
