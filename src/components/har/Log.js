import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Creator from "./Creator";
import Browser from "./Browser";
import Pages from "./Pages";
import Entries from "./Entries";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Log = ({ log }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} id="log_details">
        <Grid item xs={12}>
          <Paper elevation={2} className={classes.paper}>
            {log.version}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          {log?.creator && <Creator creator={log.creator} />}
        </Grid>

        <Grid item xs={12}>
          {log?.browser && <Browser browser={log.browser} />}
        </Grid>

        {log.pages &&
          log.pages.map((page, i) => (
            <Grid item xs={12} key={i} className="pages">
              <Pages pages={page} />
            </Grid>
          ))}

        {log.entries &&
          log.entries.map((entry, i) => (
            <Grid item xs={12} key={i} className="entries">
              <Entries entries={entry} />
            </Grid>
          ))}
        <Grid item xs={12}>
          <Paper className={classes.paper}>{log.comments}</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Log;
