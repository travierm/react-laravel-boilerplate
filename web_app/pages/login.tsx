import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { loginUser } from '../api/auth';
import { useAuth } from '../contexts/auth2';

interface IFormInput {
	email: string;
	password: string;
}

const theme = createTheme();

export default function Login() {
	const { login } = useAuth()
	const router = useRouter()
	const { register, watch, handleSubmit, formState: { errors } } = useForm();

	const onSubmit: SubmitHandler<IFormInput> = data => (
		loginUser(data.email, data.password).then((resp: any) => {

			resp = resp.data;
			login({
				id: resp.user.id,
				name: resp.user.name,
				email: resp.user.email,
				token: resp.token
			})

			router.push('/')
		}).catch((err) => {
			throw err
			console.error('failed to login')
		})
	)

	return (
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
					Login
				</Typography>
				<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
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
						Login
					</Button>
					<Grid container>
						{/* <Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid> */}
						<Grid item>
							<Link onClick={() => router.push('/register')} variant="body2">
								{"Don't have an account? Register"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>

		</Container>
	);
}
