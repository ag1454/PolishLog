import React from 'react';
import { Text } from 'react-native';
import styles from '../styling/Home.style.js';
import SafeAreaView from 'react-native-safe-area-view';
import { Button } from 'react-native-paper';

function Home({ navigation }) {
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Polish Log</Text>

        <Button
            mode="contained"
            buttonColor="#FF92F4"
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={() => navigation.navigate('Your Logs')}>
            Your Logs
        </Button>
    </SafeAreaView>
    );
}

export default Home;