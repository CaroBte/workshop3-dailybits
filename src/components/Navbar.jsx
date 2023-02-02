import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styles/navbar.sass'

const Navbar = () => {
    return (
        <>
            <div className='divNav'>
                <ul className='divNav__ul'>
                    <li className='divNav__li'>
                        <Link to='/home' className='divNav__Link'>
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
}

export default Navbar