import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import Home from './Home';
import Details from './Details';
import Apparel from './Apparel';
import Sneakers from './Sneakers';
import Accessories from './Accessories';
import Profile from './Profile';
import CartListItem from './Asset Bundle/code/components/CartListItem';
import ShoppingCart from './ShoppingCart';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
        <Stack.Screen name="Sneakers" component={Sneakers} options={{headerShown:false}}/>
        <Stack.Screen name="Accessories" component={Accessories} options={{headerShown:false}}/>
        <Stack.Screen name='Apparel' component={Apparel} options={{headerShown:false}}/>
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name = 'Cart' component={ShoppingCart} options={{headerShown:false}} />

      </Stack.Navigator>
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
