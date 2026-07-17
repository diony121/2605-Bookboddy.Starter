import axios from "axios";
import {useContext, createContext } from "react";
const API = import.meta.env.VITE_API_URL;

const AuthContext = createContext();

export function AuthProvider ({children}){

  const attemptRegister = async (userInfo)=>{
    const { data }  = await axios.post(
      `${API}/register`,
      userInfo,
    )
    console.log(data);
  }
  const value = {
    attemptRegister
  }
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context){
    throw Error("useBooks must be used within the context of authProvider")
  }

  return context;
}