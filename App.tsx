import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNav from './src/navigation/StackNav';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <StackNav/>
        </Provider>
      </NavigationContainer>
    )
  }
}

export default App


// import * as React from 'react';
// import { Linking } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Text, View } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';
// import ProfileScreen from './src/screens/ProfileScreen';


// const Stack = createStackNavigator();

// export default function App() {
//   React.useEffect(() => {
//     const handleDeepLink = ({ url }: { url: string }) => {
//       console.log(url);
      
//       const route = url.replace(/.*?:\/\//g, '');
//       const routeName = route.split('/')[0];

//       if (routeName === 'profile') {
//         const username = route.split('/')[1];
//         navigation.navigate('Profile', { username });
//       }
//     };

//     Linking.addEventListener('url', handleDeepLink);

//     // return () => {
//     //   Linking.removeEventListener('url', handleDeepLink);
//     // };
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={({ route }) => ({ title: route.params.username })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
