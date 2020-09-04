import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
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

const Params = ({ params }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper} id="params_details">
      {params?.length > 0? 
      <div className="parameters">
        <Typography variant="h5" component="h5">
            Params
          </Typography>
        {params.map((param, i) => (
          <Paper elevation={1} key={i} className={`param_details ${i % 2 === 0? classes.row_even : classes.row_odd}`}>
            <Typography variant="body1" component="div" style={{ overflowWrap: "break-word" }}>{param.name}: <span>{param.value}</span></Typography>
            <Typography variant="body1" component="div">fileName: <span>{param.fileName}</span></Typography>
            <Typography variant="body1" component="div">contentType: <span>{param.contentType}</span></Typography>
            <Typography variant="body1" component="div">{param.comment}</Typography>
          </Paper>
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

export default React.memo(Params);
