import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import logo from '../styles/logo.png'

const Login = () => {
    const { loginWithRedirect, isLoading } = useAuth0()

    return (
        <>
            {isLoading ? <img src={logo} alt="logo" /> : <> {loginWithRedirect()}</>}
        </>

    )
}

export default Login
