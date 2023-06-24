import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(null)
  const [userLoading, setUserLoading] = useState(null)
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if(user){
        setUserLogin(user)
        setUserLoading(true)
      }else{
        setUserLogin(null)
      }
    });
  }, []);

  const login = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  };
  const cerrarSesion = () => {
    signOut(auth);
  }
  return (
    <AuthContext.Provider value={{ login, userLogin, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};


