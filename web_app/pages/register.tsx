import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { registerUser } from '../api/auth';

interface IFormInput {
	name: string;
	email: string,
	password: string;
}

const theme = createTheme();

export default function Register() {
	const { register, watch, handleSubmit, formState: { errors } } = useForm();

	const onSubmit: SubmitHandler<IFormInput> = data => (
		registerUser(data.name, data.email, data.password).then((resp) => {

			console.log(resp);
			//redirect('/');
		})
	)

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Register Account
					</Typography>
					<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
						{/* name */}
						<TextField
							{...register('name', { required: true })}
							margin="normal"
							required
							fullWidth
							id="name"
							label="Username"
							name="name"
							autoComplete="name"
							autoFocus
						/>

						<TextField
							{...register('email', { required: true })}
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							{...register('password', { required: true })}
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item>
								<Link href="/login" variant="body2">
									{"Already have an account?"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
