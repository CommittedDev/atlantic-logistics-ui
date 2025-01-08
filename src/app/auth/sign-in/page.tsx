'use client';

import { signIn } from '@/redux/reducers/auth/auth-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { Button, Group, Paper, PasswordInput, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Page = () => {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.auth.loading);


  return (
    <div>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" value={username} required onChange={(e) => setUsername(e.target.value)} />
        <PasswordInput label="Password" value={password} required mt="md" onChange={(e) => setPassword(e.target.value)} />
        <Group justify="space-between" mt="lg">
        </Group>
        <Button fullWidth mt="xl" disabled={isLoading} loading={isLoading} onClick={() => dispatch(signIn({ username, password }))} >
          Sign in
        </Button>
      </Paper>
    </div>
  )
}

export default Page