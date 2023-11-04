"use client"
import React, { createContext, useState } from 'react';
export const MyContext = createContext()

const Context = ({children}) => {
    const username = "Parag Agarwal"
    return (
        <div>
            <MyContext.Provider value={username}>
                {children}
            </MyContext.Provider>
        </div>
        )
}

export default Context;