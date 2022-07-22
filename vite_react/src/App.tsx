import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

import { AppSidebar } from './components/AppSideBar';

export function App(props: any) {
  return (
    <Container component="main" maxWidth="lg">
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
        </Box>
      </Box>
    </Container >
  );
}


export default App
