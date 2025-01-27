'use client';

import React, {useState} from 'react';
import {Box, Container, CssBaseline, TextField, Typography, Avatar, Grid2 as Grid, Paper, Link} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import type {AppDispatch} from '@/redux/store';
import {SignIn} from '@/redux/reducers/auth-slice';
import {useRouter} from 'next/navigation';
import {selectLoading} from '@/redux/selectors/auth-selector';
import {LoadingButton} from '@mui/lab';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Page = () => {
  const router = useRouter();
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid container justifyContent="center" alignItems="center" sx={{minHeight: '90vh'}}>
        <Grid size={12}>
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 3,
              backgroundColor: '#f9f9f9',
            }}>
            <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" fontWeight="bold" color="primary.main">
              ATLANTIS LOGISTICS
            </Typography>
            <Box component="form" noValidate sx={{mt: 3, width: '100%'}}>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <TextField
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant="outlined"
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <LoadingButton
                loading={isLoading}
                disabled={isLoading}
                onClick={() => dispatch(SignIn(username, password, router))}
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  borderRadius: 2,
                }}>
                Sign In
              </LoadingButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="body2" color="text.secondary" align="center" sx={{mt: 2}}>
        {'© '}
        <Link color="inherit" href="#">
          Atlantic Logistics{' '}
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default Page;
