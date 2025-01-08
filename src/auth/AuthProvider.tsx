'use client'

import { RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'
import React, { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
    const router = useRouter()

    // useEffect is used to perform navigation after the component has rendered
    useEffect(() => {
        if (!isLoggedIn) {
            // Redirect to the login page if not logged in
            router.push('/auth/sign-in')
        }
    }, [isLoggedIn, router]) // Depend on isLoggedIn to trigger navigation when the auth state changes

    // If the user is not logged in, prevent rendering of children
    if (!isLoggedIn) return null

    return <>{children}</> // Render children only if the user is logged in
}

export default AuthProvider
