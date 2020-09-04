import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FilterListIcon from "@material-ui/icons/FilterList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.primary,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Filters = ({ count, applyFilters, resetFilters }) => {
  const classes = useStyles();
  const [values, setValues] = useState("");

  const minLen = 2;

  const filterValue = () => {
    return values;
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setValues(input);
    if (input?.length >= minLen && /.*\s$/.test(input)) {
      console.log(`applying filter -> ${filterValue()}`);
      applyFilters(filterValue());
    } else if (input?.length === 0) {
      console.log("resetting filter");
      resetFilters();
    }
  };

  return (
    <div className={classes.root}>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-filter">Filter</InputLabel>
        <Input
          id="standard-adornment-filter"
          variant="filled"
          value={values}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              {count || 0} <FilterListIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default Filters;
