import React, { createContext, useEffect, useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../component/Footer/Footer";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import { ToastContainer } from "react-toastify";

export const AuthContext = createContext();

const RootLayout = () => {
  const [loading,setLoading] = useState(true);
  const[user,setUser] = useState(null)
  const handleSignUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }


  const updateUser = (updatedData) =>{
    return updateProfile(auth.currentUser,updatedData);
  }

  const forgetPassword = (email) =>{
    return sendPasswordResetEmail(auth,email);
  }

  const handleSignOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  const contextValue = {
    handleSignUp,
    handleSignIn,
    user,
    setUser,
    handleSignOut,
    loading,
    updateUser,
    forgetPassword
  };


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
      // console.log(currentUser)
      // if(currentUser){
      //   const uid = currentUser.uid;
      // }else{
      //   //...
      // }
    });
    return ()=>{
      unsubscribe();
    }
  }, [])

  return (
    <div>
      
        <AuthContext.Provider value={contextValue}>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </AuthContext.Provider>
      <ToastContainer/>
    </div>
  );
};

export default RootLayout;
