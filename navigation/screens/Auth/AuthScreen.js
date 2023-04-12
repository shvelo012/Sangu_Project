import * as React from 'react';
import { useState } from 'react';
import {
  View, Text, TextInput, 
  KeyboardAvoidingView, 
  StyleSheet, 
  TouchableWithoutFeedback,
  Keyboard, 
  TouchableOpacity

} from 'react-native';
// import { StyleSheet } from 'react-native';
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
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <Text style={styles.header}>Login</Text>
              <Text style={styles.txt} >Email</Text>
              <TextInput
                placeholder='Example@sangu.edu.ge'
                style={styles.textInput}
                onChangeText={handleEmailChange}
                value={email}
                keyboardType='email-address'
              />
              <Text style={styles.txt}>Password</Text>
              <TextInput
                placeholder='********'
                style={styles.textInput}
                onChangeText={handlePassworChange}
                value={password}
                secureTextEntry={true}
              />
              <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.forgoTxt} >Forgot password?</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.btnContainer} onPress={() => handleLogIn(email, password)}>
                  <Text style={styles.buttonText} >Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
  },
  header: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontSize: 24,
    color: '#111111',
    textAlign: 'center',
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    backgroundColor: 'rgba(249, 249, 249, 0.8)',
    padding: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 4,
    transform: [{ rotate: '0.3deg' }],
    height: 32,
    marginBottom: 36,
    marginTop: 10,

  },
  btnContainer: {
    alignItems: 'center',
    backgroundColor: "#e22e44",
    height: 40,
    padding: 8,
    borderRadius: 8,
    marginTop: 12,
  },

  txt: {
    marginStart: 4,
    color: '#111111',

  },
  forgoTxt: {
    marginStart: 4,
    textAlign: 'left',
    color: "#e22e44",
  },
  buttonText: {
    color: '#FFFFFF',
    width: 44,
    height: 18,
    fontFamily: 'Helvetica',
    fontSize: 16,
    lineHeight: 18,
  }
});
