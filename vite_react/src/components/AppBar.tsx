import AppBar, { Button, Toolbar, Typography } from '@mui/material';

export function AppBar() {
	return (
		<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
			<Toolbar sx={{ pt6: true }}>
				<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
					React Laravel Boilerplate
				</Typography>

				<Button onClick={() => { logout() }}>Logout</Button>
			</Toolbar>
		</AppBar>
	)
}
