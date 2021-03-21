import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useActiveUser, useAuthLoading } from '../hooks/AuthContext';

const PrivateRoute = props => {
  const currentUser = useActiveUser();
  const loading = useAuthLoading();
  if(!loading && !currentUser) return <Redirect to='login' />;

  return <Route {...props} />;
};

export default PrivateRoute;