import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import { StackNav1 } from './StackNav1';

const Tab = createBottomTabNavigator();

export function BottomNav() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home1" component={StackNav1} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}