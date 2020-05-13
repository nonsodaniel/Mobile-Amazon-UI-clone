import React, { Component } from 'react'
import {
    StyleSheet, Text, View,
    TouchableOpacity, Platform, StatusBar, Image
}
    from 'react-native'


import { Container, Content, Header, Left, Right, Icon, Item, Input } from 'native-base'
import FAIcon from "react-native-vector-icons/FontAwesome";
import Swiper from 'react-native-swiper'


class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={[{
                    backgroundColor: "#3a455c",
                    height: 90, borderBottomColor: "#757575"
                }, styles.androidHeader]
                }>
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
                    height: 75, position: "relative",
                    right: 0, left: 0,
                    backgroundColor: "#3a455c",
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

                <Content style={{ backgroundColor: "#d5d5d6" }}>
                    <View style={{
                        height: 50, backgroundColor: "white", paddingHorizontal: 5,
                        flexDirection: "row", justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Text>Hello, Nonso Daniel</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text>Your Account </Text>
                            <Icon name="arrow-forward" style={{ fontSize: 18 }} />
                        </View>
                    </View>

                    <Swiper style={{ height: 100 }} autoplay={true}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/swiper_2.jpg')}
                                style={{ height: null, width: null, resizeMode: "contain", flex: 1 }}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/swiper_3.jpg')}
                                style={{ height: null, width: null, resizeMode: "contain", flex: 1 }}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/swiper_2.jpg')}
                                style={{ height: null, width: null, resizeMode: "contain", flex: 1 }}
                            />
                        </View>
                    </Swiper>
                </Content>




            </Container>
        )
    }
}




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


export default HomeScreen
