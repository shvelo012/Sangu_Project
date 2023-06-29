import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import CookieManager from "@react-native-cookies/cookies";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);

    try {
      const response = await fetch('https://ums.sangu.edu.ge/auth/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (response.ok) {
        // const data = await response.json();

        const cookies = await CookieManager.get('https://ums.sangu.edu.ge/auth/login');
        const userToken = cookies["connect.sid"].value;

        await AsyncStorage.setItem('userToken', userToken);
        setUserToken(userToken);
        setIsLoading(false);
      } else {
        console.error('Login failed');
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };


  const logOut = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem('userToken');
    setUserToken(null);
    setIsLoading(false);
  }

  // const isLoggedIn = async () => {
  //   try {
  //     setIsLoading(true);
  //     setIsLoading(false);
  //   } catch (e) {
  //     console.log(`Is logged in error'${e}`);
  //   }
  // }


  // useEffect(() => {
  //   isLoggedIn();
  // }, []
  // );

  return (
    <AuthContext.Provider value={{ login, logOut, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  )
}
