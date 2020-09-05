import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function WelcomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>

            <View style={{margin: 20}}>
                <Text style={styles.text}>Log In</Text>
                <Button title="Log In" onPress={() => navigation.navigate("Login")}></Button>
            </View>

            <View style={{margin: 20}}>
                <Text style={styles.text}>Don't have an account? Sign Up!</Text>
                <Button title="Sign Up" onPress={() => navigation.navigate("Signup")}></Button>
            </View>

            <View style={{margin: 20}}>
                <Button title="Products" onPress={() => navigation.navigate("Products")}></Button>
            </View>
        </View>
    );
};

export default WelcomeScreen;

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

