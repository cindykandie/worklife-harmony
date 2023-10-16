import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import WellnessScreen from './screens/WellnessScreen';
import TrainingScreen from './screens/TrainingScreen';
import MyTabs from './components/MyTabs';
import MyDrawer from './components/MyDrawer';

const Stack = createStackNavigator();


function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        {/* <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="WellnessScreen" component={WellnessScreen} options={{ title: 'Wellness' }} />
        <Stack.Screen name="TrainingScreen" component={TrainingScreen} options={{ title: 'Training' }} />
      </Stack.Navigator>
      {/* <MyDrawer/> */}
    </NavigationContainer>
  );
}

export default AppNavigation;
