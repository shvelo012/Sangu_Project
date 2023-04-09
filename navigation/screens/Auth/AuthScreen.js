import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Auth({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [data, setData] = useState('');
  const [dataCheck, setDataCheck] = useState(null);

  const fetchData = async () => {
    try {
      const result = await AsyncStorage.getItem(email);
      console.log('Data fetched from AsyncStorage:', result);
      return result;
    } catch (error) {
      console.log('Error fetching data from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    fetchData().then((result) => {
      setDataCheck(result);
    });
  }, []);


  const handleLogIn = async (email, password) => {
    await saveString('email', email);
    await saveString('password', password);
    await checkAsyncStorage()
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };

  const validateEmail = email => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleEmailChange = email => {
    setEmail(email);
    setIsValid(validateEmail(email));
  };

  const handlePassworChange = password => {
    setPassword(password);
  };

  const saveString = async (key, value) => {
    try {
      await AsyncStorage.setItem(key.toString(), value.toString());
      console.log(`Saved ${value} to ${key}`);
    } catch (error) {
      console.log(`Error saving ${value} to ${key}`);
    }
  };

  const checkAsyncStorage = async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      setData(allKeys);
      console.log('All keys:', allKeys);

    } catch {
      console.log(`Error checking AsyncStorage`);
    }
  };

  return (
    <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleEmailChange}
        value={email}
        placeholder='Email'
        keyboardType='email-address'
      />
      {!isValid && (
        <Text style={{ color: 'red' }}>Please enter a valid email address</Text>
      )}
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handlePassworChange}
        value={password}
        placeholder='Password'
        secureTextEntry={true}
      />

      <Text
        onPress={() => handleLogIn(email, password)}

        style={{ fontSize: 26, fontWeight: 'bold' }}>
        Log in
      </Text>
    </View>
  );
}
