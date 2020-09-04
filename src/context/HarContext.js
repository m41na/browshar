import React, { createContext, useEffect, useState } from "react";
import { har } from "../store";

export const HarContext = createContext({ har: {} });

export const HarProvider = ({ children }) => {
  const [originalState, setOriginalState] = useState(null);
  const [state, setState] = useState(null);
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    setOriginalState({ ...har });
  }, []);

  useEffect(() => {
    setState(originalState);
  }, [originalState]);

  const resetFilters = () => {
    setState(originalState);
  };

  const applyFilters = (filters) => {
    console.log(
      "filter criteria",
      filters,
      "state.length",
      state?.log.entries.length
    );
    const tokens = filters
      .trim()
      .split(/\s|,/)
      .filter((token) => token.length > 0);
    const groups = tokens.reduce(
      (res, token) => {
        const item = token.trim();
        if (item.length > 1) {
          if (item.startsWith("-")) {
            res.negative.push(item.substring(1));
          } else if (item.startsWith("+")) {
            res.positive.push(item.substring(1));
          } else {
            res.positive.push(item);
          }
        }
        return res;
      },
      { negative: [], positive: [] }
    );
    const exclude = new RegExp(`(${groups.negative.join("|")})`);
    const include = new RegExp(`(${groups.positive.join("|")})`);
    console.log("include criteria", include, 'exclude criteria', exclude);
    const newState = {
      ...originalState,
      log: {
        ...originalState.log,
        entries: originalState.log.entries.filter(
          (entry) =>
            !exclude.test(entry.request?.url) && include.test(entry.request?.url)
        ),
      },
    };
    console.log("# of entries is now", newState.log.entries.length);
    setState(newState);
  };

  return (
    <HarContext.Provider
      value={{
        state,
        resetFilters,
        applyFilters,
        showInput: showForm,
        updateState: (state) => setOriginalState(state),
        toggleInput: () => setShowForm(!showForm)
      }}
    >
      {children}
    </HarContext.Provider>
  );
};
