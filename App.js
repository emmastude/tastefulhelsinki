
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Favourites from './Favourites';

import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


export default function App() {


  return (
    <NavigationContainer>


      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            //home icon
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            }

            //favourite icon
            else if (route.name === 'Favourites') {
              iconName = 'heart';
            }
            //returns an icon component 
            return <Ionicons name={iconName} size={size} color={color} />;

          },
        })}>


        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favourites" component={Favourites} />
      </Tab.Navigator>

    </NavigationContainer>


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
