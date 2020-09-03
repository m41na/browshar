import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PageTimings from "./PageTimings";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Pages = ({ pages }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="pages_details">
      <div id="pages_startedDateTime">{pages.startedDateTime}</div>
      <div id="pages_id">{pages.id}</div>
      <div id="pages_title">{pages.title}</div>
      <PageTimings pageTimings={pages.pageTimings} />
      <div id="pages_comment">{pages.comment}</div>
    </Paper>
  );
};

export default Pages;
