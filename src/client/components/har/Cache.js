import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Cache = ({ cache }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="cache_details">
      {Object.keys(cache).length > 0 ? (
        <>
          <Typography variant="h5" component="h2">
            Cache
          </Typography>
          <div id="cache_beforeRequest">
            <BeforeRequest after_request={cache.before_request} />
          </div>
          <div id="cache_afterRequest">
            <AfterRequest after_request={cache.after_request} />
          </div>
          <div id="cache_comment">{cache.comment}</div>
        </>
      ) : (
        <Typography variant="h5" component="h2">
          No Cache
        </Typography>
      )}
    </Paper>
  );
};

const AfterRequest = ({ after_request }) => {
  return (
    <div id="after_request_details">
      <Typography variant="subtitle1" component="h5">
        cache after request
      </Typography>
      <Typography variant="body1" component="div">
        expires: <span>{after_request?.expires}</span>
      </Typography>
      <Typography variant="body1" component="div">
        lastAccess: <span>{after_request?.lastAccess}</span>
      </Typography>
      <Typography variant="body1" component="div">
        eTag: <span>{after_request?.eTag}</span>
      </Typography>
      <Typography variant="body1" component="div">
        hitCount: <span>{after_request?.hitCount}</span>
      </Typography>
      <Typography variant="body1" component="div">
        {after_request?.comment}
      </Typography>
    </div>
  );
};

const BeforeRequest = ({ before_request }) => {
  return (
    <div id="before_request_details">
      <Typography variant="subtitle1" component="h5">
        cache before request
      </Typography>
      <Typography variant="body1" component="div">
        expires: <span>{before_request?.expires}</span>
      </Typography>
      <Typography variant="body1" component="div">
        lastAccess: <span>{before_request?.lastAccess}</span>
      </Typography>
      <Typography variant="body1" component="div">
        eTag: <span>{before_request?.eTag}</span>
      </Typography>
      <Typography variant="body1" component="div">
        hitCount: <span>{before_request?.hitCount}</span>
      </Typography>
      <Typography variant="body1" component="div">
        {before_request?.comment}
      </Typography>
    </div>
  );
};

export default React.memo(Cache);
