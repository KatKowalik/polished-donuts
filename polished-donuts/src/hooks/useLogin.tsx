import { useState, ChangeEvent, useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../utils/context";
import { UserContext } from "../types/types";
import { useAuthContext } from "./useAuth";



export const useLogin = () => {
    const navigate = useNavigate();
    const [activeUser, setActiveUser] : [activeUser: UserContext["activeUser"], setActiveUser: UserContext["setActiveUser"]] = useState({
        email: "",
        password: ""
    });
    const { dispatch } = useAuthContext();

    const login = async (activeUser: UserContext["activeUser"]) => {
        
        const response = await axios.post("http://localhost:3000/users/login", activeUser);
        console.log(response.data);
        const token = response.data.access_token;
        console.log(token)
        const user = await axios.get("http://localhost:3000/users/profile", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        console.log(user)
        // setActiveUser(response.data)
        dispatch({type: "LOGIN", payload: user})
    }

    return { login };
}
    