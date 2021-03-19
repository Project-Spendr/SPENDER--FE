import React, { useState, useEffect } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchLogin, fetchVerify, fetchLogout, fetchSignup } from '../services/auth';

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  const authService = (serviceFn, ...args) => {
    setAuthError(null);
    return serviceFn(...args)
      .then(user => setActiveUser(user))
      .catch(err => setAuthError(err));
  };

  const login = (email, password) => authService(fetchLogin, email, password);

  const signup = (email, password) => authService(fetchSignup, email, password);

  const logout = () => authService(fetchLogout).then(() => setActiveUser(null));
  

  useEffect(() => {
    setActiveUser(null);
    fetchVerify()
      .then(user => setActiveUser(user))
      .finally(() => setAuthLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ activeUser, authLoading, authError, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}