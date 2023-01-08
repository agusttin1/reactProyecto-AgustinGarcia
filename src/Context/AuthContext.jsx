import { useContext } from "react";
import {createContext} from "react";
 const authContext = createContext()


export const useAuth =()=>{
    const context = useContext(authContext)
    return context
}

export const AuthProvider =({Children})=>{

const SignUp = (name,email,pass)=>{
    console.log(name,email,pass)

}
    return(
        <>
        <authContext.Provider value={{SignUp}}>
            {Children}
        </authContext.Provider>
        </>
    )

}
