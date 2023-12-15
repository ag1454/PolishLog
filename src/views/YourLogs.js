import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from '../styling/YourLogs.style.js';
import SafeAreaView from 'react-native-safe-area-view';
import { Searchbar, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// icons: https://icons.expo.fyi/

function YourLogs() {
    return (
    <SafeAreaView style={styles.container}>
        <View>
            <View style={styles.expandHead}>
                <View style={{width: "75%"}}>
                    <Searchbar
                        placeholder="Search"
                        style={styles.searchbar}/>
                </View>

                <View style={{width: "25%"}}>
                    <Button
                        icon="menu"
                        mode="contained"
                        contentStyle={{flexDirection: 'row-reverse'}}
                        onPress={() => console.log('Pressed')}
                        style={styles.button}
                        textColor="#000000">
                        Sort
                    </Button>
                </View>
            </View>

            <ScrollView style={{height: "80%"}}>
                <Text>Log 1</Text>
            </ScrollView>
        </View>
    </SafeAreaView>
    );
}

export default YourLogs;