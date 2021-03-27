import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch; 
};

export const useSelector = selectorFxn => {
  const { state } = useContext(AppContext);
  return selectorFxn(state);
};