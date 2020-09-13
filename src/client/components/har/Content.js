import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Content = ({ content }) => {
  const classes = useStyles();

  const [hidden, setHidden] = useState(true);

  return (
    <Paper elevation={2} className={classes.paper} id="response_details">
      <Typography variant="body1" component="div">
        size: <span>{content.size} </span>
      </Typography>
      <Typography variant="body1" component="div">
        compression: <span>{content.compression}</span>
      </Typography>
      <Typography variant="body1" component="div">
        mimeType: <span>{content.mimeType}</span>
      </Typography>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={!hidden}
              onChange={() => setHidden(!hidden)}
              color="primary"
            />
          }
          label="Show content"
        />
      </FormGroup>
      {!hidden && (
        <Typography
          variant="body1"
          component="div"
          style={{ overflowWrap: "break-word" }}
        >
          {content.text}
        </Typography>
      )}
      <Typography variant="body1" component="div">
        {content.comment}
      </Typography>
    </Paper>
  );
};

export default React.memo(Content);
