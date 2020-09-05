import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import WelcomeScreen from './MyScreens/WelcomeScreen.js';
import LoginScreen from './MyScreens/LoginScreen.js';
import SignupScreen from './MyScreens/SignupScreen.js';
import SignUpScreen from './MyScreens/SignupScreen.js';
import ProductsScreen from './MyScreens/ProductsScreen.js';
import ExperationScreen from './MyScreens/ExperationScreen.js';
import AddedScreen from './MyScreens/AddedScreen.js';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer 
        //linking={LinkingConfiguration}
        >
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title:"Welcome to my Homepage"}} />
            <Stack.Screen name="Login" component={LoginScreen} options ={{title: "Log In Screen"}} />
            <Stack.Screen name="Signup" component={SignUpScreen} options ={{title: "Sign Up Screen"}} />
            <Stack.Screen name="Products" component={ProductsScreen} options ={{title: "Welcome to our Products"}} />
            <Stack.Screen name="Experation" component={ExperationScreen} options ={{title: "Experation of a Product"}} />
            <Stack.Screen name="Added" component={AddedScreen} options ={{title: "List of Added Products"}} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
