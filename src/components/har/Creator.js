import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Creator = ({ creator }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="creator_details">
      <Typography variant="body1" component="div">{creator.name}</Typography>
      <Typography variant="body1" component="div">{creator.version}</Typography>
      <Typography variant="body1" component="div">{creator?.comment}</Typography>
    </Paper>
  );
};

export default React.memo(Creator);
