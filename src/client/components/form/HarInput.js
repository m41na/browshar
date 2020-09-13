import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: '100%',
      paddingRight: 15,
      height: '100vh'
    },
  },
}));

const InputForm = ({updateState}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} id="log_details">
        <Grid item xs={12}>
          <form className={classes.form} noValidate autoComplete="off">
              <TextField
                id="filled-multiline"
                label="HAR input"
                multiline
                rows={4}
                placeholder="Copy and Paste HAR content here"
                variant="filled"
                onChange={(e) => updateState(JSON.parse(e.target.value))}
              />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default InputForm;
