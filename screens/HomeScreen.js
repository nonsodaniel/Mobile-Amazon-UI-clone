import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


import { Container, Content, Header, Left, Right, Icon, Item, Input } from 'native-base'
import FAIcon from "react-native-vector-icons/FontAwesome";

class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={{
                    backgroundColor: "#3a455c",
                    height: 90, borderBottomColor: "#757575"
                }}>
                    <Left style={{ flexDirection: "row" }}>
                        <Icon name="md-menu" style={{ color: "white", marginRight: 15 }}
                        />
                        <FAIcon name="amazon" style={{
                            color: "white", fontSize: 32
                        }}
                        />
                    </Left>
                    <Right>
                        <Icon name="md-cart" style={{ color: "white" }} />
                    </Right>
                </Header>
                <View style={{
                    height: 70, position: "absolute",
                    right: 0, left: 0,
                    top: 135, backgroundColor: "#3a455c",
                    flexDirection: "row", alignItems: "center",
                    paddingHorizontal: 5
                }}>
                    <TouchableOpacity>
                        <View style={{
                            width: 100, backgroundColor: "#e7e7eb",
                            height: 50, borderRadius: 4, padding: 10
                        }}>
                            <Text style={{ fontSize: 12 }}>Shop by</Text>
                            <Text style={{ fontWeight: "bold" }}>Category</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        flex: 1, height: "100%", marginLeft: 5, justifyContent: "center"
                    }}>
                        <Item style={{ backgroundColor: "white", paddingHorizontal: 10, borderRadius: 5 }}>
                            <Icon name="search" style={{ fontSize: 20, paddingTop: 5 }} />
                            <Input placeholder="Search" />
                        </Item>
                    </View>
                </View>
            </Container>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})


export default HomeScreen
