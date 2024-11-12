import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import homescreen from './homescreen';
import fscreen from './flashcards';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homescreen">
        <Stack.Screen name="homescreen" component={homescreen}/>
        <Stack.Screen name="fscreen" component={fscreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;
