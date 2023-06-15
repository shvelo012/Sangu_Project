import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import CookieManager from "@react-native-cookies/cookies";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);


  const login1 = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://ums.sangu.edu.ge/auth/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Include credentials (cookies) in the request
      });

      if (response.ok) {
        const data = await response.json();
        // console.log('Login successful', data); uncomment thisss
        // console.log(response.headers); uncomment thisss
        // Extract cookies from the response headers
        const cookies = response.headers.get('Set-Cookie');
        console.log('cookies:', cookies);
        const Origin = response.headers.get('Origin');
        console.log('Origin:', Origin);

        CookieManager.get('https://ums.sangu.edu.ge/auth/login')
          .then((cookies) => {
            console.log('CookieManager.get =>', cookies);
            return new Promise((resolve) => {
              setUserToken(cookies);
              AsyncStorage.setItem('userToken', cookies["connect.sid"].value)
                .then(() => {
                  resolve();
                })
                .catch((error) => {
                  console.error('AsyncStorage.setItem Error:', error);
                  resolve();
                });
            });
          })
          .then(() => {
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('CookieManager.get Error:', error);
            setIsLoading(false);
          });


      } else {
        console.error('Login failed');
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  };

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

  // AsyncStorage.getAllKeys()
  //   .then(keys => {
  //     // Fetch values for each key
  //     return AsyncStorage.multiGet(keys);
  //   })
  //   .then(keyValuePairs => {
  //     // Log key-value pairs
  //     keyValuePairs.forEach(([key, value]) => {
  //       console.log(`Key: ${key}, Value: ${value}`);
  //     });
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });

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
