import { createContext } from "react";

const AuthContext = createContext({
    isAuthenticated : false,
    setIsAuthenticated : () =>{},
    token : null,
    setToken : () => {},
    roles : "ROLE_USER",
    setRoles : () => {}
})

export default AuthContext;