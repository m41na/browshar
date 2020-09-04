import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import PageTimings from "./PageTimings";
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

const Pages = ({ pages }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="pages_details">
      <Typography variant="subtitle1" component="h2">Pages</Typography>
      <Typography variant="body1" component="div" className={classes.row_even}>id: <span>{pages.id}</span></Typography>
      <Typography variant="body1" component="div" className={classes.row_odd} style={{ overflowWrap: "break-word" }}>title: <span>{pages.title}</span></Typography>
      <Typography variant="body1" component="div" className={classes.row_even}>startedDateTime: <span>{pages.startedDateTime}</span></Typography>
      <PageTimings pageTimings={pages.pageTimings} />
      <Typography variant="body1" component="div" className={classes.row_odd}>{pages.comment}</Typography>
    </Paper>
  );
};

export default React.memo(Pages);
