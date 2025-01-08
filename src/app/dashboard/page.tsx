'use client';

import { signOut } from '@/redux/reducers/auth/auth-slice'
import { Button } from '@mantine/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/redux/store'

const Page = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h1>HELLO</h1>
      <Button onClick={() => dispatch(signOut())} >sign out</Button>
    </div>
  )
}

export default Page