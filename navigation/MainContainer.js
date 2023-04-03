import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


//screens
import Home from './screens/HomeScreen'
import Details from './screens/DetailsScreen'
import Table from './screens/SettingsScreen'
import Calendar from './screens/CalendarScreen';
import StudentCard from './screens/StudentCardScreen';
import Profile from './screens/ProfileScreen';
import Finances from './screens/FinancesScreen';
import Exams from './screens/ExamsScreen';
import Documents from './screens/DocumentsScren';
import Auth from './screens/AuthScreen';


const homeName = 'Home';
const detailsName = 'Details';
const tableName = 'Table';
const calendarName = 'Calendar';
const StudentCardName = 'StudentCard';
const ProfileName = 'Profile';
const FinancesName = 'Finances';
const ExamsName = 'Exams';
const DocumentsName = 'Documents';
const AuthName = 'Auth';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function DetailsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={detailsName} component={Details} options={{ headerShown: false }} />
      <Stack.Screen name={StudentCardName} component={StudentCard} />
      <Stack.Screen name={ProfileName} component={Profile} />
      <Stack.Screen name={FinancesName} component={Finances} />
      <Stack.Screen name={ExamsName} component={Exams} />
      <Stack.Screen name={DocumentsName} component={Documents} />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
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
          } else if (rn === tableName) {
            iconName = focused ? 'tablet-landscape' : 'tablet-landscape-outline';
          } else if (rn === calendarName) {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })} >
      <Tab.Screen name={homeName} component={Home} options={{ headerShown: false }} />
      <Tab.Screen name={calendarName} component={Calendar} options={{ headerShown: false }} />
      <Tab.Screen name={tableName} component={Table} options={{ headerShown: false }} />
      <Tab.Screen name={detailsName} component={DetailsStack} options={{ headerShown: false }} />

    </Tab.Navigator>
  )
}


export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={AuthName} component={Auth} />
        <Stack.Screen name="Dashboard" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
