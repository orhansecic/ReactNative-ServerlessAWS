import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button, Image, ScrollView} from 'react-native';

function ProductsScreen ({navigation}) {

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/dev/products")
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.products;
        })
        .then(products => {
            setProducts(products);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => setLoading(false));
    }, []);

    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/dev/products")
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.people;
        })
        .then(people => {
            setPeople(people);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => setLoading(false));
    }, []);

    const addedProducts = [];

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>These are the products that we currently have:</Text>
            
            {products.map((p) => (
                <View style={styles.productCard}>
                    <View>
                        <Image source={p.image} style={styles.img}></Image>
                    </View>

                    <View style={{margin: 10}}>
                        <Text style={styles.item}>Product: {p.name}</Text>
                        <Text style={styles.item}>Description: {p.description}</Text>
                        <Text style={styles.item}>Price: {p.price} KM(BAM)</Text>

                        <View style={{flexDirection: "row"}}>
                            <Button style={styles.button} title="Experation Date" onPress={() => navigation.navigate("Experation", {image:p.image, exp: p.Experation, product: p.name})}></Button>
                            <Button style={styles.button} title= "Add" onPress={() => addedProducts.push(p)}></Button>
                        </View>
                    </View>                    
                </View>
            ))}
            {people.map((person) => (
                <View style={{margin: 50}}>
                    <Text>Employee's name is: {person.name}</Text>
                    <Text>Additional Information: {person.bio}</Text>
                </View>
            ))}
            <Button title="List of Added Products" onPress={() => navigation.navigate("Added", {added: addedProducts})}></Button>

        </ScrollView>
    );
};

export default ProductsScreen;

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
    },
    item:{
        margin: 5,
    }
});
