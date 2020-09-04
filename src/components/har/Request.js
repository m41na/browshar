import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Headers from "./Headers";
import Cookies from "./Cookies";
import QueryString from "./QueryString";
import PostData from "./PostData";
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

const Request = ({ request }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="request_details">
      <Typography variant="h5" component="div">
        Request
      </Typography>
      <Typography variant="body1" component="div" className={classes.row_even}>
        {request.method}
      </Typography>
      <Typography variant="body1" component="div"  className={classes.row_odd}style={{ overflowWrap: "break-word" }}>
        {request.url}
      </Typography>
      <Typography variant="body1" component="div" className={classes.row_even}>
        {request.httpVersion}
      </Typography>
      <Cookies cookies={request.cookies} />
      <Headers headers={request.headers} />
      <QueryString queryString={request.queryString} />
      {request?.postData && <PostData postData={request.postData} />}
      <Typography variant="body1" component="div" className={classes.row_odd}>
        headersSize: <span>{request.headersSize}</span>
      </Typography>
      <Typography variant="body1" component="div" className={classes.row_even}>
        bodySize: <span>{request.bodySize}</span>
      </Typography>
      <Typography variant="body1" component="div" className={classes.row_odd}>
        {request.comment}
      </Typography>
    </Paper>
  );
};

export default React.memo(Request);
