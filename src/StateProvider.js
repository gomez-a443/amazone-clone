import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => {
  const context = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
