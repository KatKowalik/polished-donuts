import { createContext, useState, useContext, useReducer } from "react";
import { UserContext } from "../types/types";


export const AuthContext = createContext<UserContext | null>(null);

export const authReducer = (state: any, action: any) => {
    switch(action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default: 
            return state
    }
}

export const AuthContextProvider = ({ children }: { children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    })

    return (
        <AuthContext.Provider value={{...state}}>{ children }</AuthContext.Provider>
    )
}
