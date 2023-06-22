import * as React from 'react';
import { useState, useContext } from 'react';
import {
  View, Text, TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  TouchableOpacity

} from 'react-native';
// import { StyleSheet } from 'react-native';
// import { useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './Auth.Styles'
import { AuthContext } from '../../../Context/AuthContext';


export default function Auth({ navigation }) {
  const { login1 } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [data, setData] = useState('');
  const [dataCheck, setDataCheck] = useState(null);
  const [isFailed, setIsFailed] = useState();

  const handleLogIn = async (email, password) => {
    const a = await login1(email, password);
  };

  const handlePress = () => {
    Linking.openURL("https://ums.sangu.edu.ge/#!/reset");
  };

  const validateEmail = email => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleEmailChange = email => {
    setEmail(email);
    setIsValid(validateEmail(email));

  };

  const handlePasswordChange = password => {
    setPassword(password);
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
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={true}
              
            />
            <View style={{ alignItems: 'flex-start' }}>
              <Text onPress={handlePress} style={styles.forgoTxt} >Forgot password?</Text>
            </View>
            <View>
              {/* disabled={!password || !email } */}
              <TouchableOpacity style={styles.btnContainer} onPress={() => handleLogIn(email, password)}>

                {/* onPress={() => login()}  */}

                {/* onPress={() => handleLogIn(email, password)} */}
                <Text style={styles.buttonText} >Login</Text>
              </TouchableOpacity>
            </View>
            {isFailed &&
              <View>
                <Text>login Failed</Text>
              </View>
            }
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );

}


