import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

import { AppSidebar } from './components/AppSideBar';

export function App(props: any) {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{}}>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            React Laravel Boilerplate
          </Typography>

          <Button>Logout</Button>
        </Toolbar>
      </AppBar>

      <AppSidebar></AppSidebar>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
        {props.children}

        <Typography variant="body2" color="text.secondary " align="center">
          {'Copyright © '}
          <a>React Laravel Boilerplate </a>
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Box>
  );
}


export default App
