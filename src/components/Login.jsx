import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import logo from '../imgs/Logo.png'

const Login = () => {
    const { loginWithRedirect } = useAuth0()

    const handleAuth = () => {
        loginWithRedirect()
    }

    return (
        <>
            {handleAuth()}
        </>

    )

}

export default Login
