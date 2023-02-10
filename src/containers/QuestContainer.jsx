import React, { useEffect, useState } from 'react'
import { api } from '../api'
import Quest from '../components/Quest'

const QuestContainer = () => {

    const [data, setData] = useState()

    const getQuestions = async () => {
        const data = await api.getQuestions()
        console.log(data);
        setData(data)
    }

    useEffect(() => {
        getQuestions()
    }, [])


    return (
        <>
            <Quest data={data} />
        </>
    )
}

export default QuestContainer