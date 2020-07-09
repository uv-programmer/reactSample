import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

  function Cat() {
  const name = "Vishnu"
  function getFullString(frstName,LastName){
    return (frstName + LastName);
  }
  return (
  <Text>Hello, I am your {getFullString(5,5)}</Text>

  );
  }

  export default function listed() {
    return (
      <View>
  <Cat/>
  <Cat/>
  <Cat/>
  <Cat/>
  <Cat/>
  </View>
    );
  }
  






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
