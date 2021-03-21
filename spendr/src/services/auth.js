import { post, get } from './request';

export const fetchSignup = (email, password) => {
  return post('/api/v1/auth/signup', { email, password });
};

export const fetchLogin = (email, password) => {
  return post('/api/v1/auth/login', { email, password });
};

export const fetchLogout = () => get('/api/v1/auth/logout');

export const fetchVerify = () => get('/api/v1/auth/verify');