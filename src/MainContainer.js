import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const homeName = 'Home'
const alarmName = 'Alarm'
const noteName = 'Note'

const MainContainer = () => {
  return (
    <NavigationContainer>
        
    </NavigationContainer>
  )
}

export default MainContainer