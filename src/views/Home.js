import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styling/Home.style.js';
import SafeAreaView from 'react-native-safe-area-view';
import { Button } from 'react-native-paper';

function Home() {
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Polish Log</Text>

        <Button mode="contained" onPress={() => console.log('Pressed')}>
            Press me
        </Button>
    </SafeAreaView>
    );
}

export default Home;