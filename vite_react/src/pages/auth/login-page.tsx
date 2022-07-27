import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from '../../contexts/auth-context';

type FormValues = {
	email: string;
	password: string;
};

export function LoginPage() {
	const { login } = useAuth()
	const { register, handleSubmit } = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = data => login(data.email, data.password)

	return (
		<Box
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign in
			</Typography>

			<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
				<TextField

					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					autoComplete="email"
					autoFocus
					{...register('email', { required: true })}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
					{...register('password', { required: true })}
				/>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
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
					<Grid item xs>
						<a href="/login" variant="body2">
							Forgot password?
						</a>
					</Grid>
					<Grid item>
						<a variant="body2">
							{"Don't have an account? Sign Up"}
						</a>
					</Grid>
				</Grid>
			</Box>
		</Box >
	)
}
