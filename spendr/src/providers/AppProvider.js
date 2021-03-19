  
import React, { useReducer } from 'react';
import { AppContext } from '../hooks/AppContext';
import reducer, { initialState } from '../reducers/reducer';

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;