import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styles/navbar.sass'
import { useAuth0 } from '@auth0/auth0-react'
import Intro from './Intro'

const Navbar = () => {

    const { isAuthenticated } = useAuth0()
    if (isAuthenticated)
        return (
            <>
                <div className='divNav'>
                    <ul className='divNav__ul'>
                        <li className='divNav__li'>
                            <Link to='/' className='divNav__Link'>
                                <i className="fa-solid fa-house divNav__icon"></i>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className='divNav__li'>
                            <Link to='/stats' className='divNav__Link'>
                                <i className="fa-solid fa-chart-line divNav__icon"></i>
                                <p>Estadísticas</p>
                            </Link>
                        </li>
                        <li className='divNav__li'>
                            <Link to='/profile' className='divNav__Link'>
                                <i className="fa-regular fa-user divNav__icon"></i>
                                <p>Perfil</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Outlet />
            </>
        )
    return (
        <Intro />
    )

}

export default Navbar