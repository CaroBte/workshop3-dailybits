import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import logo from '../imgs/Logo.png'

const Login = () => {
    const { loginWithRedirect, isLoading } = useAuth0()

    return (
        <>
            {isLoading ?
                <img className='logo-loading' src={logo} alt="logo" />
                : <> {loginWithRedirect()}</>}
        </>

    )
}

export default Login
