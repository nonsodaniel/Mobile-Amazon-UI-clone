import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import { DrawerNavigator } from 'react-navigation'
import { Container, Header, Content, ListItem, Left, Icon } from 'native-base'




export default class App extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    )
  }
}

export const CustomDrawerContentComponent = (props) => {
  return (
    <Container>
      <Header style={[{ backgroundColor: "#3a455c", height: 90 }, , styles.androidHeader]}>
        <Left style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Icon name="person" styles={{ color: "white" }} />
          <Text style={{
            marginLeft: 5, fontSize: 22, color: "white"
          }}>Nonso Daniel</Text>
        </Left>
      </Header>
      <Content>
        <FlatList
          styles={{ borderTopWidth: 0.5, borderTopColor: "#f0f0f0" }}
          data={[
            "Home", "Shop by Category", "Today's Deals"
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
        <FlatList
          styles={{ borderTopWidth: 0.5, borderTopColor: "#f0f0f0" }}
          data={[
            "Your Wishlist", "Your Account", "Amazon Pay", "Prime", "Sell on Amazon"
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
        <FlatList
          styles={{ borderTopWidth: 0.5, borderTopColor: "#f0f0f0" }}
          data={[
            "Settings", "Customer Service"
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  )
}



const AppDrawerNavigator = new DrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
}, {
  drawerPosition: "left",
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: "DrawerClose",
  drawerToggleRoute: "DrawerToggle"
}
)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
})

