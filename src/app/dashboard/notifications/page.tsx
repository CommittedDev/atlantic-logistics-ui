'use client';

import ToggleDarkTheme from '@/components/toggle-dark-theme/ToggleDarkTheme';
import { signOut } from '@/redux/reducers/auth/auth-slice';
import { AppDispatch } from '@/redux/store'
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import React from 'react'
import { useDispatch } from 'react-redux'

const Page = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h1>Notifications</h1>
      <Button onClick={() => dispatch(signOut())} >sign out</Button>
      <Button onClick={() => { notifications.show({ title: 'Hello', message: 'This is a notification', color: 'blue', position: 'top-right' }) }}>
        Done
      </Button>
      <ToggleDarkTheme />
    </div>
  )
}

export default Page