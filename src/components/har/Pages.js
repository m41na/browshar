import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import PageTimings from "./PageTimings";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Pages = ({ pages }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="pages_details">
      <Typography variant="subtitle1" component="h2">Pages</Typography>
      <Typography variant="body1" component="div">id: <span>{pages.id}</span></Typography>
      <Typography variant="body1" component="div">title: <span>{pages.title}</span></Typography>
      <Typography variant="body1" component="div">startedDateTime: <span>{pages.startedDateTime}</span></Typography>
      <PageTimings pageTimings={pages.pageTimings} />
      <Typography variant="body1" component="div">{pages.comment}</Typography>
    </Paper>
  );
};

export default Pages;
