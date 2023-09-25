import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import WellnessScreen from './screens/WellnessScreen';
import TrainingScreen from './screens/TrainingScreen';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="WellnessScreen" component={WellnessScreen} options={{ title: 'Wellness' }} />
        <Stack.Screen name="TrainingScreen" component={TrainingScreen} options={{ title: 'Training' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
