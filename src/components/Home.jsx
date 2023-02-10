import React, { useContext } from 'react'
import html from '../imgs/html-logo.png'
import css from '../imgs/css-logo.png'
import js from '../imgs/js-logo.png'
import figma from '../imgs/figma-logo.png'
import ux from '../imgs/ux-logo.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../styles/home.sass'
import * as questionario from "../api/Questionario"
import { questContext, questDispatchers } from '../context/QuestContext'

const Home = () => {

    const { category } = useContext(questContext)
    const { setCategory } = useContext(questDispatchers)

    const navigate = useNavigate()

    const handleCategory = (_category) => {
        setCategory(_category)
        navigate("/quest")
        /* return <Navigate to="/quest" /> */
    }

    return (
        <>
            <div className='container-logos'>
                <p className='title-home'>Practica tus conocimientos en la categoría que prefieras.</p>
                <div className='item-logos-html'>
                    <div onClick={() => handleCategory(questionario.questionHTML)} className='link'>
                        <img src={html} alt="html-logo" />
                        <p>HTML</p>
                    </div>
                </div>
                <div className='item-logos'>
                    <div>
                        <div onClick={() => handleCategory(questionario.questionCSS)} className='link'>
                            <img src={css} alt="css-logo" />
                            <p>CSS</p>
                        </div>
                    </div>
                    <div>
                        <div onClick={() => handleCategory(questionario.questionJS)} className='link'>
                            <img src={js} alt="js-logo" />
                            <p>JS</p>
                        </div>
                    </div>
                </div>
                <div className='item-logos'>
                    <div>
                        <div onClick={() => handleCategory(questionario.questionFigma)} className='link'>
                            <img src={figma} alt="figma-logo" />
                            <p>FIGMA</p>
                            <div />
                        </div>
                    </div>
                    <div>
                        <div onClick={() => handleCategory(questionario.questionUX)}>
                            <div to="/quest" className='link'>
                                <img src={ux} alt="ux-logo" />
                                <p>UX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home