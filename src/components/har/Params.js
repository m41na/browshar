import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Params = ({ params }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="params_details">
      {params.length > 0? 
      <div className="parameters">
        <Typography variant="h5" component="h5">
            Params
          </Typography>
        {params.map((param, i) => (
          <div key={i} className="param_details">
            <Typography variant="body1" component="div">{param.name}: <span>{param.value}</span></Typography>
            <Typography variant="body1" component="div">fileName: <span>{param.fileName}</span></Typography>
            <Typography variant="body1" component="div">contentType: <span>{param.contentType}</span></Typography>
            <Typography variant="body1" component="div">{param.comment}</Typography>
          </div>
        ))}
        </div>
        : (
          <Typography variant="h5" component="h2">
          No Params
        </Typography>
        )}
    </Paper>
  );
};

export default Params;
