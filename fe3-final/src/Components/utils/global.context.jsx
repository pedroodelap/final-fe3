import { createContext, useContext, useState, useReducer, useEffect } from "react";

import axios from 'axios';



export const DentiStates = createContext();


export const initialDentiState = {
    dentiList: [],
    denti: {},
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    theme: 'light'
}


const dentiReducer = (state, action) => {
    switch (action.type) {
        case "LISTA":
            return {...state, dentiList: action.payload}; 
        case "DENTISTA":
            return {...state, denti: action.payload};
        case "FAVS":
            return {...state, favs: [...state.favs, action.payload]}; 
            return {...state, theme: action.payload};
        default:
            throw new Error();
    }
};



const Context = ({children}) => {

    // useReducer
    const [ dentiState, dentiDispatch ] = useReducer(dentiReducer, initialDentiState);

    
    const urlList = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        axios(urlList)
        .then(res => dentiDispatch({type: "LISTA", payload: res.data}))
    }, [])

   
    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(dentiState.favs))
    }, [dentiState.favs])

    
    return (
        <DentiStates.Provider value={{
            dentiState, dentiDispatch
        }}>
            {children}
        </DentiStates.Provider>
    )

}


export default Context;
export const useDentiStates = () => useContext(DentiStates);