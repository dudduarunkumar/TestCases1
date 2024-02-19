import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Counter from '../screens/counter/Counter';
import Todos from '../screens/todo/Todos';
import Splash from '../screens/splash/Splash';
import { BottomNav } from './BottomNav';
import Login from '../screens/login/Login';
const Stack = createStackNavigator();

export class StackNav extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name="Counter" component={Counter} />
            <Stack.Screen name="Todos" component={Todos} /> */}

            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="BottomNav" component={BottomNav}/>
        </Stack.Navigator>
    )
  }
}

export default StackNav