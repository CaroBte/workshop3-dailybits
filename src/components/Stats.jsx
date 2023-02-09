import React from 'react'
import '../styles/stats.sass'

const Stats = () => {
    return (
        <div>
            <h3 className='stats-text'>Estadísticas</h3>
            <p className='stats-text'>Los últimos 7 días <i className="fa-solid fa-chevron-down"></i></p>
            <div className='stats-item'>
                <p><i className="fa-regular fa-clock"></i> Tiempo de estudio (horas)</p>
                <p>1</p>
            </div>
            <div className='stats-item'>
                <p><i className="fa-regular fa-comment"></i> Respuestas contestadas</p>
                <p>40</p>
            </div>
            <div className='stats-item'>
                <p><i className="fa-regular fa-comment"></i> Respuestas correctas</p>
                <p className='stats-correct'>20</p>
            </div>
            <div className='stats-item'>
                <p><i className="fa-regular fa-comment"></i> Respuestas incorrectas</p>
                <p className='stats-incorrect'>20</p>
            </div>

        </div>
    )
}

export default Stats