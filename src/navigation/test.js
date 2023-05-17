// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go back to Home"
//         onPress={() => navigation.goBack()}
//       />
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// function ProfileScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Profile Screen</Text>
//       <Button
//         title="Go back to Settings"
//         onPress={() => navigation.goBack()}
//       />
//     </View>
//   );
// }

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// }

// function SettingsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="Settings" component={SettingsStack} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// // export default App;

// import React, {useContext, useState} from "react";
// import {Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image} from "react-native";
// import { Linking} from 'react-native'
// import {AuthContext} from "../../context/AuthContext";
// const LoginScreen = ({navigtaion}) => {
//     const [email,setEmail] = useState(null);
//     const [password,setPassword] = useState(null);
//     const val = useContext(AuthContext);
//     return (
//         <View style={styles.container}>
//             <Image
//                 style={styles.img}
//                 source={require('/Users/nikolosdolidze/WebstormProjects/untitled/Sangu_Project/assets/Sangu.png')}
//             />
//             <View style={styles.wrapper}>
//                 <Text>{val}</Text>
//                 <TextInput style={styles.input} placeholder="ელ-ფოსტა " value={email} onChangeText={text => setEmail(text)}/>
//                 <TextInput style={styles.input} placeholder="პაროლი" value={password} onChangeText={text => setPassword(text)} secureTextEntry/>

//                 <Button title='შესვლა' color="#EA5455"/>

//                 <View style={{flexDirection: 'row', marginTop: 20}}>
//                     <Text>დaგავიწყდა პაროლი?</Text>
//                     <TouchableOpacity onPress={handlePress}>
//                         <Text style={styles.link}> პაროლის აღდგენა</Text>
//                     </TouchableOpacity>
//                 </View>

//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create(
//     {
//         container: {
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         wrapper: {
//             width: '80%'
//         },
//         input: {
//             marginBottom: 12,
//             borderWidth: 1,
//             borderColor: '#bbb',
//             borderRadius: 5,
//             fontSize: 18,
//             padding: 10,
//             paddingHorizontal: 14,
//         },
//         link: {
//             color: 'blue'
//         },
//         img: {
//             width: 100,
//             height: 100,
//             textAlign:"center",
//             marginBottom:48,

//         },
//         buttonHover:{

// }
//     });


// const handlePress = () => {
//     Linking.openURL('https://ums.sangu.edu.ge/#!/reset');
// };
// export default LoginScreen;
