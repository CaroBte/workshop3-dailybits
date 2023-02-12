import React from 'react'
import '../styles/profile.sass';
import { useAuth0 } from '@auth0/auth0-react'


const Profile = () => {

    const { logout, user, isAuthenticated } = useAuth0()

    const handleLogout = () => {
        logout({ returnTo: window.location.origin })
    }

    return (

        <>
            {isAuthenticated ? <div className='profile'>
                {console.log(user)}
                <img src={user.picture} alt={user.name} />
                <h1>Hello, {user.name}</h1>
                <h2>Email: {user.email}</h2>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </div> : <div className='profile'>
                    {console.log(user)}
                    <img src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png" />
                    <h1>Hello, Bianey Bolaños </h1>
                    <h2>Email: bney@gmail.com </h2>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>}
        </>
    )
}

export default Profile