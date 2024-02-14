import React, { useReducer } from 'react'
import Header from './Header'
import Footer from './Footer'
import { initialState, reducer } from './Reducer';

export default function Layout({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <Header state={state} dispatch={dispatch}/>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
