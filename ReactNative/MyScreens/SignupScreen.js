import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

function SignUpScreen ({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Please create an account!</Text>
            <TextInput placeholder="Username" onChange={(e) => console.log(e.nativeEvent.text)}></TextInput>
            <TextInput placeholder="Password" onChange={(e) => console.log(e.nativeEvent.text)}></TextInput>
            <Button title="Sign Up" onPress={() => navigation.navigate("Welcome")}></Button>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cornsilk",
    },
    title:{
        fontWeight: "bold",
        fontSize: 35,
        textAlign: "center",
        margin: 20,
    },
    text:{
        fontSize: 21,
        textAlign: "center",
        margin: 12,
    }

});