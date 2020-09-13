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
  }
}));

const Cookies = ({ cookies }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="cookies_details">
      {cookies.length > 0 ? (
        <div className="cookies">
          <Typography variant="h5" component="div">
            Cookies
          </Typography>
          {cookies.map((cookie, i) => (
            <Paper elevation={1} key={i} className={`cookie_details ${i % 2 === 0? classes.row_even : classes.row_odd}`}>
              <Typography variant="body1" component="div" style={{ overflowWrap: "break-word" }}>
                value: {cookie.name}: <span>{cookie.value}</span>
              </Typography>
              <Typography variant="body1" component="div">
                path: <span>{cookie.path}</span>
              </Typography>
              <Typography variant="body1" component="div">
                domain: <span>{cookie.domain}</span>
              </Typography>
              <Typography variant="body1" component="div">
                expired: <span>{cookie.expires}</span>
              </Typography>
              <Typography variant="body1" component="div">
                httpOnly: <span>{cookie.httpOnly}</span>
              </Typography>
              <Typography variant="body1" component="div">
                secure: <span>{cookie.secure}</span>
              </Typography>
              <Typography variant="body1" component="div">
                id: <span>{cookie.comment}</span>
              </Typography>
            </Paper>
          ))}
        </div>
      ) : (
        <Typography variant="h5" component="h2">
          No Cookies
        </Typography>
      )}
    </Paper>
  );
};

export default React.memo(Cookies);
