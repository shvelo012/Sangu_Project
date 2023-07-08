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
import { styles } from './Auth.Styles';
import { AuthContext } from '../../../Context/AuthContext';

export default function Auth({ navigation }) {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleLogIn = (email, password) => {
    login(email, password);
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
  }
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
            <Text style={styles.header}>ავტორიზაცია</Text>
            <Text style={styles.txt} >ელ. ფოსტა</Text>
            <TextInput
              placeholder='Example@sangu.edu.ge'
              style={styles.textInput}
              onChangeText={handleEmailChange}
              value={email}
              keyboardType='email-address'
            />
            <Text style={styles.txt}>პაროლი</Text>
            <TextInput
              placeholder='********'
              style={styles.textInput}
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={true}

            />
            <View style={{ alignItems: 'flex-start' }}>
              <Text onPress={handlePress} style={styles.forgoTxt} >დაგავიწყდა პაროლი?</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.btnContainer} disabled={!isValid} onPress={() => handleLogIn(email, password)}>
                <Text style={styles.buttonText} >შესვლა</Text>
              </TouchableOpacity>
            </View>
            {/* {isFailed &&
              <View>
                <Text>login Failed</Text>
              </View>
            } */}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );

}