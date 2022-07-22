import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Component } from 'react';

import { useAuth } from '../contexts/auth2';
import { AppSidebar } from './components/AppSidebar';
import { Copyright } from './components/Copyright';

const drawerWidth = 240;

export function App(props: any) {
	const { logout } = useAuth();

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar sx={{ pt6: true }}>
					<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
						React Laravel Boilerplate
					</Typography>

					<Button onClick={() => { logout() }}>Logout</Button>
				</Toolbar>
			</AppBar>

			<AppSidebar></AppSidebar>
			<Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
				{props.children}
			</Box>

			<Copyright></Copyright>
		</Box>
	);
}
