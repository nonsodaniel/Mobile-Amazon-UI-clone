import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './screens/HomeScreen'
import { DrawerNavigator } from 'react-navigation'




export default class App extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    )
  }
}



const AppDrawerNavigator = new DrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

