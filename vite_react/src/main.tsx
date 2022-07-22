import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { LoginPage } from './pages/auth/login-page';
import theme from './theme';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App>
          <Routes>
            <Route path='/' element={<h1>Hello</h1>} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </App>
      </ThemeProvider>
    </BrowserRouter >
  </React.StrictMode >
)
