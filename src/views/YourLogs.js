import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from '../styling/YourLogs.style.js';
import SafeAreaView from 'react-native-safe-area-view';
import { Searchbar, Button, Avatar } from 'react-native-paper';
// icons: https://icons.expo.fyi/

function YourLogs({ navigation }) {
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
        </View>

        <ScrollView style={{height: "80%"}}>
            <View style={styles.logBox}>
                <Avatar.Image size={100} source={require('../../assets/grey.jpg')}/>

                <View style={styles.logBoxText}>
                    <Text style={{fontFamily: 'Cochin', fontSize: 30}}>[LOG NAME]</Text>
                    <Text style={{fontFamily: 'Cochin', fontSize: 20, marginTop: 5}}>Brands:</Text>
                    <Text style={{fontFamily: 'Cochin', fontSize: 20, marginTop: 5}}>Colors:</Text>
                </View>
            </View>
            <View style={styles.logBox}>
                <Avatar.Image size={100} source={require('../../assets/grey.jpg')}/>

                <View style={styles.logBoxText}>
                    <Text style={{fontFamily: 'Cochin', fontSize: 30}}>[LOG NAME]</Text>
                    <Text style={{fontFamily: 'Cochin', fontSize: 20, marginTop: 5}}>Brands:</Text>
                    <Text style={{fontFamily: 'Cochin', fontSize: 20, marginTop: 5}}>Colors:</Text>
                </View>
            </View>
        </ScrollView>
        <Button
                mode="contained"
                contentStyle={{flexDirection: 'row-reverse'}}
                onPress={() => navigation.navigate('Add Log')}
                style={styles.addLogButton}
                textColor="#FFFFFF"
                labelStyle={styles.buttonText}>
                Add Log
            </Button>
    </SafeAreaView>
    );
}

export default YourLogs;