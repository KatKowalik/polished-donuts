import { useState, ChangeEvent, useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../utils/context";



export const useLogin = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error("useLogin must be used inside AuthProvider")
    }

    return context
    // const navigate = useNavigate();
    // const [activeUser, setActiveUser] = useState({
    //     email: "",
    //     password: ""
    // });

    // console.log(activeUser)

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // axios.defaults.withCredentials = true;
    // axios.post("http://localhost:8080/users/login", activeUser)
    // .then((response) => {
    //     console.log(response)
    //     navigate("/");
    // })
    // .catch((error) => {
    //     console.error("Cannot log in the user", error);
    // }); 
    // }

    //  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     setActiveUser({ ...activeUser, [e.target.name]: e.target.value});
    // }

    // return activeUser;
}
    