import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

function AddedScreen ({route, navigation}) {

    const {added} = route.params;

    return(
        <View style={styles.container}>
                {added.map((i) => (
                    <View>
                        <Text>{i.name}</Text>
                        <Text>{i.description}</Text>
                    </View>
                ))}
        <Button title="Buy" onPress={() => navigation.navigate("Products")}></Button>

        </View>
    );
};

export default AddedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cornsilk",
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
    },
    button:{
        margin: 5,
    }
});
