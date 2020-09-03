import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Headers from "./Headers";
import Cookies from "./Cookies";
import QueryString from "./QueryString";
import PostData from "./PostData";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Request = ({ request }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="request_details">
      <Typography variant="h5" component="div">
        Request
      </Typography>
      <Typography variant="body1" component="div">
        {request.method}
      </Typography>
      <Typography variant="body1" component="div">
        {request.url}
      </Typography>
      <Typography variant="body1" component="div">
        {request.httpVersion}
      </Typography>
      <Cookies cookies={request.cookies} />
      <Headers headers={request.headers} />
      <QueryString queryString={request.queryString} />
      {request?.postData && <PostData postData={request.postData} />}
      <Typography variant="body1" component="div">
        headersSize: <span>{request.headersSize}</span>
      </Typography>
      <Typography variant="body1" component="div">
        bodySize: <span>{request.bodySize}</span>
      </Typography>
      <Typography variant="body1" component="div">
        {request.comment}
      </Typography>
    </Paper>
  );
};

export default Request;
