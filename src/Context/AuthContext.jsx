import axios from "axios";
import {useContext, createContext, useState} from "react";
import App from "../App";
const API = import.meta.env.VITE_API_URL;

const AuthContext = createContext();

export function AuthProvider ({children}){
  const [user, setUser] = useState();

  const attemptRegister = async (userInfo)=>{
    const { data }  = await axios.post(
      `${API}/register`,
      userInfo,
    )
    console.log(data);
  }


  const attemptLogin = async (credentials) => {
    try { 
      const { data } = await axios.post(
      `${API}/login`,
      credentials,
    )
    window.localStorage.setItem("token", data.token);
    authenticate(window.localStorage.getItem("token"))
    } catch (error) {
      console.log(error)      
    }
  }

  const authenticate = async (token) => {
    try {
      if(!token){
        throw Error("no token")
      }
      const {data} = await axios.get(`${API}/me`, {
        headers:{
        Authorization: token,
        },
      });
      setUser(data);
    } catch (error) {
      console.log(error)
      
    }
  }
  
  const value = {
    attemptRegister,
    attemptLogin,
    authenticate,
    user,

  }
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export  function useAuth() {
  const context = useContext(AuthContext);
  if (!context){
    throw Error("useBooks must be used within the context of authProvider")
  }

  return context;
}