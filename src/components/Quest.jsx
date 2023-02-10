import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import kid from '../imgs/kid.png'
import '../styles/quest.sass'
import { questContext } from '../context/QuestContext'

const Quest = () => {

    const { category } = useContext(questContext)
    console.log("desde quest:", category);
    let [counter, setCounter] = useState(0)

    let navigate = useNavigate()

    const nextQuest = () => {
        console.log("holi c:");
        if (counter === category.length - 1) {
            alert("terminaste c:")
            navigate("/")
        } setCounter(counter + 1)
    }

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
                    <h3>{category[counter].question}</h3>
                </div>
                <div className='options'>
                    <div className='stats-item option'>
                        <p>{category[counter].a}</p>
                        <i className="fa-regular fa-circle"></i>
                    </div>
                    <div className='stats-item option'>
                        <p>{category[counter].b}</p>
                        <i className="fa-regular fa-circle"></i>
                    </div>
                    <div className='stats-item option'>
                        <p>{category[counter].c}</p>
                        <i className="fa-regular fa-circle"></i>
                    </div>
                    <div className='stats-item option'>
                        <p>{category[counter].d}</p>
                        <i className="fa-regular fa-circle"></i>
                    </div>
                    <button onClick={() => nextQuest()} id='btn-comprobar'>COMPROBAR</button>
                </div>
            </div>
        </>
    )
}

export default Quest