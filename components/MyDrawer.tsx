import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, View } from 'react-native'; // Import Button from your component library


import Profile from '../screens/Profile';
import Faqs from '../screens/Faqs';
import CAC from '../screens/CAC';
import FeelingsJar from '../screens/FeelingsJar';
import Suggestions from '../screens/Suggestions';

const Drawer = createDrawerNavigator();


function CustomDrawerContent({ navigation }) {
  const handleLogout = () => {
    // Implement your logout logic here
    navigation.navigate('Login'); 
  };

  return (
    <View>
      <Drawer.Screen name="Logout" component={handleLogout} />
    </View>
  );
}

export function MyDrawer() {
  return (
<Drawer.Navigator
  initialRouteName="Profile"
  drawerContent={(props) => <CustomDrawerContent {...props} />}
>
<Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="FAQs" component={Faqs} />
      <Drawer.Screen name="CAC" component={CAC} />
      <Drawer.Screen name="FeelingsJar" component={FeelingsJar} />
      <Drawer.Screen name="SuggestionBox" component={Suggestions} />
</Drawer.Navigator>
  );
}
