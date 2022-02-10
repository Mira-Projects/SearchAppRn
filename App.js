/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
 import * as React from 'react';
 import { createStackNavigator } from '@react-navigation/stack';
 
 import { SafeAreaProvider } from 'react-native-safe-area-context';
 import { NavigationContainer } from '@react-navigation/native';
 
 import MapScreen from './Screens/MapScreen';
 import NewScreen from './Screens/NewScreen';
 
 
 const Stack = createStackNavigator();
 
 export default function App(props) {
   
   return (
    
 
    
   <NavigationContainer>
     <Stack.Navigator initialRouteName="MapScreen" >
       <Stack.Screen 
      name="MapScreen" 
      component={MapScreen} 
      />
        <Stack.Screen 
       name="NewScreen" 
       component={NewScreen} 
       options={{headerBackVisible:true, headerBackTitleVisible: false, title:''}}/>
    
     </Stack.Navigator>
   </NavigationContainer>
    
     );
 };
 