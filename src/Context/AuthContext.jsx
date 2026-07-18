import axios from "axios";
import {useContext, createContext, useState} from "react";
const API = import.meta.env.VITE_API_URL;

const AuthContext = createContext();

export function AuthProvider ({children}){
  const [user, setUser] = useState();
  const [reservations, setReservations] = useState([]);

  const attemptRegister = async (userInfo)=>{
    const { data }  = await axios.post(
      `${API}/users/register`,
      userInfo,
    )
    console.log(data);
  }


  const attemptLogin = async (credentials) => {
    try { 
      const { data } = await axios.post(
      `${API}/users/login`,
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
      const {data} = await axios.get(`${API}/users/me`, {
        headers:{
        Authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
      const resData = await axios.get(`${API}/reservations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setReservations(resData.data);
    } catch (error) {
      console.log(error)
      
    }
  }

  const logout = () => {
    window.localStorage.removeItem("token");
    setUser(null);
    setReservations([]);
  };

  const  fetchReservations = async () => {
    const token = window.localStorage.getItem("token");
    if (!token){
      return
    }
    try {
      const {data} = await axios.get(`${API}/reservations`, {
        headers: {
          Authorization:  `Bearer ${token}`,
        },
      });
      setReservations(data);
    } catch (error) {
      console.log(error)
      
    }
  };

 const returnBook = async (reservationId) => {
    const token = window.localStorage.getItem("token");
    try {
      await axios.delete(`${API}/reservations/${reservationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReservations(reservations.filter((r) => r.id !== reservationId));
    } catch (error) {
      console.log(error);
    }
  };

const reserveBook = async (bookId) => {
  const token = window.localStorage.getItem("token");
  try {
    await axios.post(
      `${API}/reservations`,
      { bookId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // Re-fetch reservations to get full book details
    const { data } = await axios.get(`${API}/reservations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setReservations(data);
  } catch (error) {
    console.log(error);
  }
};


  
  const value = {
    attemptRegister,
    attemptLogin,
    authenticate,
    user,
    reservations,
    logout,
    fetchReservations,
    returnBook,
    reserveBook,

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