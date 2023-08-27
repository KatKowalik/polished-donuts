import { createContext, useState, useContext, useReducer, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
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
    const navigate = useNavigate();
    const [activeUser, setActiveUser] = useState({
        email: "",
        password: ""
    });

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios.post("http://localhost:8080/users/login", activeUser)
        .then((response) => {
            navigate("/");
        })
        .catch((error) => {
            console.error("Cannot log in the user", error);
        }); 
     }

     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setActiveUser({ ...activeUser, [e.target.name]: e.target.value});
    }

    return (
        <AuthContext.Provider value={{activeUser, setActiveUser}}>{ children }</AuthContext.Provider>
    )
}
