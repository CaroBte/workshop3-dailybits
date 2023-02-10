import React from 'react'
import kid from '../imgs/kid.png'
import '../styles/quest.sass'

const Quest = () => {
    return (
        <>
            <div className="top-bar">
                <i className="fa-solid fa-xmark"></i>
                <div className='progress-bar'></div>
            </div>
            <div className="d-flex flex-row">
                <img src={kid} />
                <h4>¿Cuál es la forma más eficiente de aplicar estilos CSS en un documento HTML?</h4>
            </div>

        </>
    )
}

export default Quest