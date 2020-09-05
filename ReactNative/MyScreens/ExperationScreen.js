import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ExperationScreen({route}){

    const {image, exp, product} = route.params;

    return(
        <View style={styles.container}>
                
                <Text>The Experation Date of {product} is: {exp}</Text> 
                <Image source={image} style={styles.img}></Image>
        </View>
    );
};

export default ExperationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cornsilk",
        flexDirection: "row",
    },
    title:{
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        margin: 20,
    },
    text:{
        fontSize: 21,
        textAlign: "center",
        margin: 12,
    },
    productCard:{
        backgroundColor:"gray",
        margin: 30,
        borderRadius: 12,
        padding: 10,
        flexDirection:"row",
        alignItems: "center",
    },
    img:{
        height: 100,
        width: 100,
    }

});
