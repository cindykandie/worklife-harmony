import React from 'react';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationHelpers, NavigationProp, ParamListBase, TabNavigationState } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import WellnessScreen from '../screens/WellnessScreen';
import TrainingScreen from '../screens/TrainingScreen';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {EdgeInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

type CustomTabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  insets: EdgeInsets;
};

const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
  insets,
}) => {

    const icons = {
        Home: 'home',
        Wellness: 'leaf',
        Training: 'book',
      };
    return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingVertical: 10 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon = icons[route.name];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Button
            key={index}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 8,
              borderBottomWidth: isFocused ? 2 : 0,
              borderBottomColor: isFocused ? 'blue' : 'transparent',
              backgroundColor: 'transparent',
            }}
          >
            <Icon name={icon} size={24} color={isFocused ? 'blue' : 'gray'} />
            <Text style={{ color: isFocused ? 'blue' : 'gray' }}>{label}</Text>
          </Button>
        );
      })}
    </View>
  );
};

const MyTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60 }, // Set the height of the tab bar
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wellness" component={WellnessScreen} />
      <Tab.Screen name="Training" component={TrainingScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
