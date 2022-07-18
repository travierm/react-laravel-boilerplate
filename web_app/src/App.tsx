import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Component } from 'react';

const drawerWidth = 240;

export function App(props: any) {
	const shouldShowSidebar: boolean = false;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						React Laravel Boilerplate
					</Typography>
				</Toolbar>
			</AppBar>

			{shouldShowSidebar &&
				<Drawer
					variant="permanent"
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
					}}
				>
					<Toolbar />

					<Box sx={{ overflow: 'auto' }}>
						<List>
							{['Inbox', 'Sent', 'Archive'].map((text, index) => (
								<ListItem key={text} disablePadding>
									<ListItemButton>
										<ListItemIcon>
											{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
										</ListItemIcon>
										<ListItemText primary={text} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>

				</Drawer>
			}
			<Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
				{props.children}
			</Box>
		</Box>
	);
}
