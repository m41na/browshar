import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Headers from './Headers';
import Cookies from './Cookies';
import Content from './Content';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }));

const Response = ({response}) => {
    const classes = useStyles();

    return (
         <Paper elevation={2} className={classes.paper} id="response_details">
             <Typography variant="h5" component="div">
            Response
          </Typography>
            <Typography variant="body1" component="div">{response.status}</Typography>
            <Typography variant="body1" component="div">{response.statusText}</Typography>
            <Typography variant="body1" component="div">{response.httpVersion}</Typography>
            <Cookies cookies={response.cookies} />
            <Headers headers={response.headers}/>
            {<Content content={response.content} />}
            <Typography variant="body1" component="div">headersSize: <span>{response.headersSize}</span></Typography>
            <Typography variant="body1" component="div">bodySize: <span>{response.bodySize}</span></Typography>
            <Typography variant="body1" component="div">{response.comment}</Typography>
        </Paper>
    )
}

export default Response;