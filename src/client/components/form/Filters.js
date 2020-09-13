import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FilterListIcon from "@material-ui/icons/FilterList";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        backgroundColor: theme.palette.primary,
    },
    navigate: {
        display: "flex",
        alignSelf: 'flex-end',
        marginBottom: theme.spacing(1)
    },
    margin: {
        margin: theme.spacing(1),
        width: '90%'
    },
}));

const Filters = ({filterStatus, applyFilters, resetFilters, scrollNext, scrollPrev}) => {
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
        <form className={classes.root} noValidate autoComplete="off">
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-filter">Filter</InputLabel>
                <Input
                    id="standard-adornment-filter"
                    variant="filled"
                    value={values}
                    onChange={handleChange}
                    startAdornment={
                        <InputAdornment position="start">
                            {filterStatus || "Showing 0"} <FilterListIcon/>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <div className={classes.navigate}>
                <IconButton aria-label="previous" color="secondary" onClick={() => scrollPrev(values)}><SkipPreviousIcon/></IconButton>
                <IconButton aria-label="next" color="secondary" onClick={() => scrollNext(values)}><SkipNextIcon/></IconButton>
            </div>
        </form>
    );
};

export default Filters;
