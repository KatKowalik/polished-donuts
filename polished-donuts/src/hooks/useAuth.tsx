import { useContext } from "react";
import { AuthContext } from "../utils/context";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error("useAuthContext must be used inside AuthProvider")
    }

    return context
}