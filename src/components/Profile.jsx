import React from 'react'
import '../styles/profile.sass';

const Profile = () => {

    return (

        <div className='profile'>
            <img src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png" />
            <h1>Hello, Caro Bustamante </h1>
            <h2>Email: karito0721@gmail.com </h2>
        </div>


        /*         <div className='profile'>
                    <img src={user.picture} alt={user.name} />
                    <h1>Hello, {user.name}</h1>
                    <h2>Email: {user.email}</h2>
                </div> */
    )
}

export default Profile