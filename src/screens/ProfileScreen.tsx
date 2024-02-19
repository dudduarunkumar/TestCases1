import * as React from 'react';
import { View, Text } from 'react-native';

interface Props {
  route: any;
}

export default function ProfileScreen({ route }: Props) {
    console.log("Profile Page");
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>{route.params.username}</Text>
    </View>
  );
}