import { View, ActivityIndicator } from 'react-native';
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../Context/AuthContext';


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


const HomeName = 'მთავარი';
const DetailsName = 'დეტალები';
const TableName = 'ცხრილი';
const CalendarName = 'კალენდარი';
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
      <Stack.Screen name={StudentCardName} component={StudentCard} options={{ headerShown: false }} />
      <Stack.Screen name={ProfileName} component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name={FinancesName} component={Finances} options={{ headerShown: false }} />
      <Stack.Screen name={ExamsName} component={Exams} options={{ headerShown: false }} />
      <Stack.Screen name={DocumentsName} component={Documents} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={HomeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === HomeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === DetailsName) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === TableName) {
            iconName = focused ? 'tablet-landscape' : 'tablet-landscape-outline';
          } else if (rn === CalendarName) {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })} >
      <Tab.Screen name={HomeName} component={Home} options={{ headerShown: false }} />
      <Tab.Screen name={CalendarName} component={Calendar} options={{ headerShown: false }} />
      <Tab.Screen name={TableName} component={Table} options={{ headerShown: false }} />
      <Tab.Screen name={DetailsName} component={DetailsStack} options={{ headerShown: false }} />

    </Tab.Navigator>
  )
}


export default function MainContainer() {

  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken !== null ? (
          <>
            <Stack.Screen name="Dashboard" component={Tabs} options={{ headerShown: false }} />
          </>
        ) : (
          <Stack.Screen name={AuthName} component={Auth} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>

    </NavigationContainer>
  )
}
