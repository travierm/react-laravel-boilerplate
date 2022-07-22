import CreateIcon from '@mui/icons-material/Create';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Component, useState } from 'react';

import { useAuth } from '../../contexts/auth2';

const drawerWidth = 240;

export function AppSidebar(props: any) {
	const { user } = useAuth()

	const sidebarItems = [
		{
			text: 'Notes',
			icon: <CreateIcon />
		},
		{
			text: 'Mail',
			icon: <MailIcon />
		}
	]


	//setShouldShowBar(user.isLoggedIn)

	return (
		<React.Fragment>
			{user &&
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
							{sidebarItems.map((item, index) => (
								<ListItem key={index} disablePadding>
									<ListItemButton>
										<ListItemIcon>
											{item.icon}
										</ListItemIcon>
										<ListItemText primary={item.text} />
									</ListItemButton>
								</ListItem>
							))}

						</List>
					</Box>

				</Drawer>
			}
		</React.Fragment>
	);
}
