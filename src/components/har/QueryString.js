import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
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
            <Paper elevation={1} key={i} className={`query_param ${i % 2 === 0? classes.row_even : classes.row_odd}`}>
              <Typography variant="body1" component="div" style={{ overflowWrap: "break-word" }}>
                <span>{param.name}</span>: <span>{param.value}</span>
              </Typography>
              <Typography variant="body1" component="div">
                {param.comment}
              </Typography>
            </Paper>
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

export default React.memo(QueryString);
