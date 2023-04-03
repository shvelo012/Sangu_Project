import * as React from 'react';
import { View, Text } from 'react-native';

export default function Auth({ navigation }) {

  const handleLogIn = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={handleLogIn}
        // onPress={() => navigation.navigate('Dashboard')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>Log in</Text>
      <Text>Auth Screen</Text>
    </View>
  );
}