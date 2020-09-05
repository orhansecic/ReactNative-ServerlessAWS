import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet, Text} from 'react-native';

function LoginScreen({navigation}){
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Please Log In to your existing account!</Text>
            <TextInput placeholder="Username" onChange={(e) => setUsername(e.nativeEvent.text)}></TextInput>
            <TextInput placeholder="Password" onChange={(e) => setPassword(e.nativeEvent.text)}></TextInput>
            <Button title="Log In" onPress={() => {
                if(username== "Test" && password === "Test123"){
                    navigation.navigate("Welcome")
                }else{alert("Wrong Credentials")}
            }}></Button>
            
            <View style={{margin: 50}}>
                <Text>{username}</Text>
                <Text>{password}</Text>
            </View>
        </View>
    );
};

export default LoginScreen;


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
