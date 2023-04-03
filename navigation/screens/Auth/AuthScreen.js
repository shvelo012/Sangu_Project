import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Auth({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleLogIn = () => {
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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200 , borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleEmailChange}
        value={email}
        placeholder='Email'
        keyboardType='email-address'
      />
      {!isValid && (
        <Text style={{ color: 'red' }}>Please enter a valid email address</Text>
      )}
      <TextInput
        style={{ height: 40, width: 200 , borderColor: 'gray', borderWidth: 1 }}
        onChangeText={password => setPassword(password)}
        value={password}
        placeholder='Password'
        secureTextEntry={true}
      />
      
      <Text
        onPress={password? handleLogIn : null}
        style={{ fontSize: 26, fontWeight: 'bold' }}>Log in</Text>
    </View>
  );
}
