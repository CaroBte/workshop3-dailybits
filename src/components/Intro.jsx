import React from 'react'
import '../styles/intro.sass'
import G from '../imgs/icons8-google 1.png'
import Logo from '../imgs/Logo.png'
// import { Link } from 'react-router-dom'


const Intro = () => {
  return (
    <>
      <div className="container">
        <img src={Logo} alt="" className='logo' />
        <div className="frame-41">
          <div className="iniciar-sesion">Iniciar sesión</div>
          <div className="container2">
            <button className="login-google">
              <img src={G} className="icon-google" alt='' />
              <p className="continuar-con-google">Continuar con Google</p>
            </button>
            <div className="line-2"></div>
            <div className="input">
              <p className="frame-43">Correo electrónico</p>
              <input type="text" className="input-search" placeholder='Escriba su correo electrónico'/>
              <p className="pregunta1">¿Se te olvidó tu contraseña?</p>
              <p className="pregunta2">¿Aún no tienes una cuenta? Inscribirse</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Intro