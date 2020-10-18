import React,{ createContext, useCallback, useContext, useState } from "react";
import api from "../config/api";
import { removeUserSession, setUserSession } from "../routers/common";


export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const [data, setData] = useState(() => {
        const token = sessionStorage.getItem("token");
        // const user = sessionStorage.getItem("user");

        if (token) {
            return { token };
        }
        
        return {}
    });

    const signIn = useCallback(async( email, password) => {
       const response = await api.post("user/login", {email, password});
       const {token} = response.data;
       setUserSession(token);

       setData({token});
    }, [])

    const signOut = useCallback(() => {
        removeUserSession();
    
        setData({});
      }, []);


    return (
        <AuthContext.Provider value={{signIn, signOut, token: data.token}}>
            {children}
        </AuthContext.Provider>
    )
};


function useAuth() {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
  
    return context;
  }

export  {AuthProvider, useAuth};