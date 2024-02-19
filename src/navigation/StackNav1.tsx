import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../screens/productDetails/ProductDetails';
import Cart from '../screens/cart/Cart';
import Home from '../screens/home/Home';
const Stack = createStackNavigator();

export const StackNav1 =() =>{
      return (
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="ProductDetails" component={ProductDetails}/>
              <Stack.Screen name="Cart" component={Cart}/>
          </Stack.Navigator>
      )
  }

const styles = StyleSheet.create({})