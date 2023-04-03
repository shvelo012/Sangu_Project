import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Auth({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200 , borderColor: 'gray', borderWidth: 1 }}
        onChangeText={email => setEmail(email)}
        value={email}
        placeholder='Email'
      />
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
      {/* <Text>Auth Screen</Text> */}
    </View>
  );
}