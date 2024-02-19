import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

interface Props {
  navigation: any;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* <TouchableOpacity>
        <Text></Text>
      </TouchableOpacity> */}
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', { username: 'Arun Kumar' })}
      />
    </View>
  );
}