import React, { createContext, useContext, useReducer } from 'react';
import Reducer from './Reducer';

export const MovieContext = createContext();

const initialState = {
  loading: true,
};

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <MovieContext.Provider value={[state, dispatch]}>
      {children}
    </MovieContext.Provider>
  );
};

export const useStore = () => useContext(MovieContext);
