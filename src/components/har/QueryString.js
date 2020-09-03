import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const QueryString = ({ queryString }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="queryString_details">
      {queryString.length > 0 ? (
        <div className="query_string">
          <Typography variant="h5" component="div">
            QueryString
          </Typography>
          {queryString.map((param, i) => (
            <div key={i} className="query_param">
              <Typography variant="body1" component="div">
                <span>{param.name}</span>: <span>{param.value}</span>
              </Typography>
              <Typography variant="body1" component="div">
                {param.comment}
              </Typography>
            </div>
          ))}
        </div>
      ) : (
        <Typography variant="h5" component="h2">
          No QueryString
        </Typography>
      )}
    </Paper>
  );
};

export default QueryString;
