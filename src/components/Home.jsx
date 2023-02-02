import React from 'react'
import html from '../imgs/html-logo.png'
import css from '../imgs/css-logo.png'
import js from '../imgs/js-logo.png'
import figma from '../imgs/figma-logo.png'
import ux from '../imgs/ux-logo.png'

import '../styles/home.sass'



const Home = () => {
    return (
        <>
            <div className='container-logos'>
                <p className='title-home'>Practica tus conocimientos en la categoría que prefieras.</p>
                <div className='item-logos-html'>
                    <img src={html} alt="html-logo" />
                    <p>HTML</p>
                </div>

                <div className='item-logos'>
                    <div>
                        <img src={css} alt="css-logo" />
                        <p>CSS</p>
                    </div>
                    <div>
                        <img src={js} alt="js-logo" />
                        <p>JS</p>
                    </div>
                </div>
                <div className='item-logos'>
                    <div>
                        <img src={figma} alt="figma-logo" />
                        <p>FIGMA</p>
                    </div>
                    <div>
                        <img src={ux} alt="ux-logo" />
                        <p>UX</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home