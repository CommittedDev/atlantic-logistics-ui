'use client'

import { RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'
import React, { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
    const router = useRouter()

    // useEffect(() => {
    //     // Redirect to sign-in page if the user is not logged in
    //     if (!isLoggedIn) {
    //         router.push('/auth/sign-in')
    //     }
    // }, [isLoggedIn, router])



    return <>{children}</>
}

export default AuthProvider
