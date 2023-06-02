import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);





  const login1 = async () => {
    setIsLoading(true);
    setUserToken('isoiso');
    AsyncStorage.setItem('userToken', 'isoiso');
    setIsLoading(false);
    console.log('I am here');
    setIsLoading(false);
  }
  const logOut = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`Is logged in error'${e}`);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []
  );

  return (
    <AuthContext.Provider value={{ login1, logOut, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  )
}