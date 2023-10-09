import React from 'react';
import { NativeBaseProvider, Box } from "native-base";

import AppNavigation from './Navigation'; 



function App() {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  );
}

export default App;
