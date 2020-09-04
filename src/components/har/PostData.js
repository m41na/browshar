import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Params from "./Params";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const PostData = ({ postData }) => {
  const classes = useStyles();

  return (
    <Paper elevation={1} className={classes.paper} id="postData_details">
      <Typography variant="body1" component="div">
        mimeType: <span>{postData.mimeType}</span>
      </Typography>
      <Params params={postData.params} />
      <Typography variant="body1" component="div" style={{ overflowWrap: "break-word" }}>
        postData: <span>{postData.text}</span>
      </Typography>
      <Typography variant="body1" component="div">
        {postData.comment}
      </Typography>
    </Paper>
  );
};

export default React.memo(PostData);
