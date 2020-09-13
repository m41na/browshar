import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";
import Log from "./Log";
import HarInput from "../form/HarInput";
import Filters from "../form/Filters";
import { HarContext } from "../../context/HarContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Dev © "}
      <Link color="inherit" href="https://practicaldime.org/">
        practicaldime.org
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    width: "50%",
  },
  main: {
    marginTop: '90px',
    marginBottom: theme.spacing(2),
  },
  loading: {
    width: "100%",
    textAlign: "center",
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const HarLayout = () => {
  const classes = useStyles();
  const {
    state: har,
    filterStatus,
    applyFilters,
    resetFilters,
    scrollNext,
    scrollPrev,
    showInput,
    toggleInput,
    updateState,
  } = useContext(HarContext);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <LanguageIcon
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </LanguageIcon>
          <Typography variant="h6" className={classes.title}>
            {har?.log && (
              <Filters
                filterStatus={filterStatus}
                applyFilters={applyFilters}
                resetFilters={resetFilters}
                scrollNext={scrollNext}
                scrollPrev={scrollPrev}
              />
            )}
          </Typography>
          <Button color="inherit" onClick={toggleInput}>
            Dev Mode
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" className={classes.main}>
        {showInput ? (
          <HarInput updateState={updateState} />
        ) : har?.log ? (
          <Log log={har.log} />
        ) : (
          <div className={classes.loading}>
            <CircularProgress color="secondary" />
          </div>
        )}
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">BrowseHAR content.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default HarLayout;
