import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.root}>
        <SignupScreen />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
  },
});
