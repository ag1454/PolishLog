import React from 'react';
import { View } from 'react-native';
import styles from '../styling/Home.style.js';
import SafeAreaView from 'react-native-safe-area-view';
import { Searchbar, Button } from 'react-native-paper';

function YourLogs() {
    return (
    <SafeAreaView style={styles.container}>
        <View>
            <View style={{flexDirection: "row"}}>
                <View style={{width: "75%"}}>
                    <Searchbar
                        placeholder="Search"/>
                </View>
            </View>
        </View>
    </SafeAreaView>
    );
}

export default YourLogs;