import React from 'react'
import { Link } from 'react-router-dom'
import kid from '../imgs/kid.png'
import '../styles/quest.sass'

const Quest = () => {


    return (
        <>
            <div>
                <div className="top-bar">
                    <Link to="/" className='link'>
                        <i className="fa-solid fa-xmark"></i>
                    </Link>
                    <div className='progress-bar'></div>
                    <div className=''>
                        <span className='heart'>❤</span>
                        <span className='lives-counter'>4</span>
                    </div>
                </div>
                <div className='quest'>
                    <img src={kid} />
                    <h3>¿Cuál es la forma más eficiente de aplicar estilos CSS en un documento HTML?</h3>
                </div>
                <div className='options'>
                    <div className='stats-item option'>
                        <p>En Línea</p>
                        <i className="fa-regular fa-circle"></i>
                    </div>
                    <div className='stats-item option'>
                        <p>Incrustado en la cabecera</p>
                        <i className="fa-regular fa-circle"></i>
                    </div>
                    <div className='stats-item option'>
                        <p>Hojas de estilo externas</p>
                        <i className="fa-regular fa-circle"></i>
                    </div>
                    <div className='stats-item option'>
                        <p>Mediante PHP</p>
                        <i className="fa-regular fa-circle"></i>
                    </div>

                    <button id='btn-comprobar'>COMPROBAR</button>
                </div>

            </div>

        </>
    )
}

export default Quest