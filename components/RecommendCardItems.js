import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { CardItem, Right } from 'native-base'
import StarRating from 'react-native-star-rating'




class RecommendCardItem extends Component {
    render() {

        let { itemName, price, creator, rating, savings, imageUri } = this.props
        return (
            <CardItem>
                <View>
                    <Image source={imageUri}
                        style={{ height: 90, width: 90 }} />
                </View>
                <Right style={{
                    flex: 1, alignItems: "flex-start",
                    height: 90, paddingHorizontal: 20
                }}>
                    <Text> {itemName}</Text>
                    <Text style={{ color: "grey", fontSize: 11 }}
                    > {creator}</Text>
                    <Text style={{
                        fontSize: 14, fontWeight: 'bold',
                        color: "#c4402f"
                    }}
                    > {price}</Text>
                    <Text>
                        <Text style={{
                            color: "grey", fontWeight: "300",
                            fontSize: 11
                        }}>
                            You save
                        </Text> {savings}
                    </Text>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={rating}
                        starSize={12}
                        fullStarColor="orange"
                        emptyStarColor="orange"
                    />
                </Right>
            </CardItem>

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

export default RecommendCardItem