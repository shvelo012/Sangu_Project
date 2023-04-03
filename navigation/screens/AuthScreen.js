import * as React from 'react';
import { View, Text } from 'react-native';

export default function Auth({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Dashboard')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>Log in</Text>
        <Text>Auth Screen</Text>
    </View>
  );
}