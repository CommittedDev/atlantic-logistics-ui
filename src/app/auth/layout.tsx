'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import React, { ReactNode } from 'react'
import { Center, Container } from '@mantine/core'

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
    const router = useRouter()

    useEffect(() => {
        if (isLoggedIn) router.push('/dashboard')
    }, [isLoggedIn, router])

    return (
        <Container size="100%" m={10} style={{ minHeight: '100vh' }}>
            <Center style={{ height: '100%' }}>
                {children}
            </Center>
        </Container>
    )
}

export default AuthLayout
