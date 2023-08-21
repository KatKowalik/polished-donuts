import { useContext } from "react";
import { AuthContext } from "../utils/context";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error("useLogin must be used inside AuthProvider")
    }

    return context
}