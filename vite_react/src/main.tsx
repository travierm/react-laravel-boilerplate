import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { AuthProvider } from './contexts/auth-context';
import { LoginPage } from './pages/auth/login-page';
import { RegisterPage } from './pages/auth/register-page';
import NotFoundPage from './pages/error/not-found';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AuthProvider>
          <App>
            <Routes>
              {/* Landing page */}
              <Route path='/' element={<h1>Hello</h1>} />

              {/* Auth Routes */}
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              {/* Error Routes */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </App>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter >
  </React.StrictMode >
)
