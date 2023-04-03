import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


//screens
import Home from './screens/HomeScreen'
import Details from './screens/DetailsScreen'
import Settings from './screens/SettingsScreen'
import Calendar from './screens/CalendarScreen';
import StudentCard from './screens/StudentCardScreen';
import Profile from './screens/ProfileScreen';
import Finances from './screens/FinancesScreen';
import Exams from './screens/ExamsScreen';
import Documents from './screens/DocumentsScren';


const homeName = 'Home';
const detailsName = 'Details';
const settingsName = 'Settings';
const calendarName = 'Calendar';
const StudentCardName = 'StudentCard';
const ProfileName = 'Profile';
const FinancesName = 'Finances';
const ExamsName = 'Exams';
const DocumentsName = 'Documents';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function DetailsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={detailsName} component={Details} />
      <Stack.Screen name={StudentCardName} component={StudentCard} />
      <Stack.Screen name={ProfileName} component={Profile} />
      <Stack.Screen name={FinancesName} component={Finances} />
      <Stack.Screen name={ExamsName} component={Exams} />
      <Stack.Screen name={DocumentsName} component={Documents} />
    </Stack.Navigator>
  );
}



export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === calendarName) {
              iconName = focused ? 'calendar' : 'calendar-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })} >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={calendarName} component={Calendar} />
        <Tab.Screen name={settingsName} component={Settings} />
        <Tab.Screen name={detailsName} component={DetailsStack} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}
