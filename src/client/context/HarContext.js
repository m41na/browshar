import React, {createContext, useEffect, useState} from "react";
import {har} from "../store";
import Splitter from './Splitter';
import Reporter from "./Reporter";

export const HarContext = createContext({har: {}});

const reporter = new Reporter();
const initSplitter = new Splitter(har, reporter)

export const HarProvider = ({children}) => {
    const [splitter, resetSplitter] = useState(initSplitter);
    const [state, setState] = useState(null);
    const [showForm, setShowForm] = useState(false)
    const [filterStatus, setFilterStatus] = useState('')

    reporter.register(setFilterStatus)

    useEffect(() => {
        setState(splitter.state(splitter.filter()));
    }, [splitter]);

    const resetFilters = () => {
        setState(splitter.reset());
    };

    const applyFilters = (filters) => {
        const filtered = splitter.filter(filters)
        setState(splitter.state(filtered));
    };

    const scrollNext = (filters) => {
        const next = splitter.next(filters);
        setState(splitter.state(next))
    }

    const scrollPrev = (filters) => {
        const prev = splitter.prev(filters);
        setState(splitter.state(prev))
    }

    return (
        <HarContext.Provider
            value={{
                state,
                filterStatus,
                resetFilters,
                applyFilters,
                scrollNext,
                scrollPrev,
                showInput: showForm,
                updateState: (state) => resetSplitter(new Splitter(state, reporter)),
                toggleInput: () => setShowForm(!showForm)
            }}
        >
            {children}
        </HarContext.Provider>
    );
};
