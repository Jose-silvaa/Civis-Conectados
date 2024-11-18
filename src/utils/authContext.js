"use client"

import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
  
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserStatus({
          uid: user.uid,
          email: user.email,
        });
      } else {
        setUserStatus(null);
      }
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <AuthContext.Provider value={userStatus}>
      {children}
    </AuthContext.Provider>
  );
};