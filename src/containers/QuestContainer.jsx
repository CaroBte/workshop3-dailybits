import React, { useContext, useEffect, useState } from 'react'
import { api } from '../api'
import Quest from '../components/Quest'
import { questContext } from '../context/QuestContext'


const QuestContainer = () => {
    const { category } = useContext(questContext)
    console.log(category);

    return (
        <>
            <Quest />
        </>
    )
}

export default QuestContainer