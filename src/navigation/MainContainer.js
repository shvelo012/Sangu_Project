import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


//screens
import Home from './screens/Home/HomeScreen'
import Details from './screens/Details/DetailsScreen'
import Table from './screens/Table/TableScreen'
import Calendar from './screens/Calendar/CalendarScreen';
import StudentCard from './screens/StudentCard/StudentCardScreen';
import Profile from './screens/Profile/ProfileScreen';
import Finances from './screens/Finances/FinancesScreen';
import Exams from './screens/Exams/ExamsScreen';
import Documents from './screens/Documents/DocumentsScren';
import Auth from './screens/Auth/AuthScreen';
import { AuthContext, AuthProvider } from '../Context/AuthContext';


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


export function DetailsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='insideDetails' component={Details} options={{ headerShown: false }} />
      <Stack.Screen name={StudentCardName} component={StudentCard} />
      <Stack.Screen name={ProfileName} component={Profile} />
      <Stack.Screen name={FinancesName} component={Finances} />
      <Stack.Screen name={ExamsName} component={Exams} />
      <Stack.Screen name={DocumentsName} component={Documents} />
    </Stack.Navigator>
  );
}

export function Tabs() {
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

  const { isLoading, userToken } = useContext(AuthContext);
  console.log(isLoading);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  console.log(isLoading);
  console.log(userToken);

  return (
    <NavigationContainer>
      {/* {userToken !== null ?

          [<Stack.Screen key={'auth'} name={AuthName} component={Auth} options={{ headerShown: false }} />,
          <Stack.Screen key={'dashboard'} name="Dashboard" component={Tabs} options={{ headerShown: false }} />]

          :
          <Stack.Screen key={'auth'} name={AuthName} component={Auth} options={{ headerShown: false }} />
        } */}
      <Stack.Navigator>
        {userToken !== null ? (
          <>
            {/* <Stack.Screen name={AuthName} component={Auth} options={{ headerShown: false }} /> */}
            <Stack.Screen name="Dashboard" component={Tabs} options={{ headerShown: false }} />
          </>
        ) : (
          <Stack.Screen name={AuthName} component={Auth} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>

    </NavigationContainer>
  )
}
