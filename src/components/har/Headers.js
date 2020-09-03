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

const Headers = ({ headers }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="headers_details">
      {headers.length > 0 ? (
        <div className="query_string">
          <Typography variant="h5" component="h2">
            Headers
          </Typography>
          {headers.map((header, i) => (
            <div key={i} className="header_details">
              <Typography variant="body1" component="div">
                <span>{header.name}:</span> <span>{header.value}</span>
              </Typography>
              <Typography variant="body1" component="div">
                {header.comment}
              </Typography>
            </div>
          ))}
        </div>
      ) : (
        <Typography variant="body1" component="h2">
          No Headers
        </Typography>
      )}
    </Paper>
  );
};

export default Headers;
