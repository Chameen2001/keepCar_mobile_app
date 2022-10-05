import {NativeBaseProvider} from 'native-base';
import React from 'react';
import Login from './screens/Login';

export default function App() {
  return (
    <NativeBaseProvider>
      <Login></Login>
    </NativeBaseProvider>
  );
}
