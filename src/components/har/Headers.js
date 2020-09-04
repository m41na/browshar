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
    backgroundColor: grey[400],
    padding: 10
  },
  row_odd: {
    backgroundColor: grey[200],
    padding: 10
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
            <Paper elevation={1} key={i} className={`header_details ${i % 2 === 0? classes.row_even : classes.row_odd}`}>
              <Typography variant="body1" component="div" style={{ overflowWrap: "break-word" }}>
                <span>{header.name}</span>: <span>{header.value}</span>
              </Typography>
              <Typography variant="body1" component="div">
                {header.comment}
              </Typography>
            </Paper>
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

export default React.memo(Headers);
