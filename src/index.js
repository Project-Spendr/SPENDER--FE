import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import AppProvider from './providers/AppProvider';
import AuthProvider from './providers/AuthProvider';
import './index.css';

render(
  <AuthProvider>
    <AppProvider>    
      <App />
    </AppProvider>
    </AuthProvider>,
  document.getElementById('root')
);