import React, { createContext, useState } from 'react'

export const questContext = createContext()
export const questDispatchers = createContext()

export const QuestProvider = ({ children }) => {

    const [category, setCategory] = useState()

    const state = { category }
    const dispatchers = { setCategory }


    return (
        <>
            <questDispatchers.Provider value={dispatchers}>
                <questContext.Provider value={state}>
                    {children}
                </questContext.Provider>
            </questDispatchers.Provider>
        </>
    )
}
