import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styling/AddLog.style.js';
import SafeAreaView from 'react-native-safe-area-view';
import { TextInput, Button } from 'react-native-paper';
import UploadImage from '../components/UploadImage.js';

function YourLogs() {
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.textView}>
            <Text style={styles.text}>Log Name:</Text>

            <TextInput
                placeholder="My Awesome Log"
                style={styles.textInput}
                underlineColor="transparent"
                mode="outlined"
                activeOutlineColor="#FF92F4"
                //   value={text}
                // onChangeText={text => setText(text)}
            />
        </View>

        <View style={styles.textView}>
            <Text style={styles.text}>Log Photo:</Text>
        </View>
        <UploadImage/>
        <View style={styles.buttonView}>
            <Button
                mode="contained"
                contentStyle={{flexDirection: 'row-reverse'}}
                onPress={() => navigation.navigate('Add Log')}
                style={styles.cancelButton}
                textColor="#FFFFFF"
                labelStyle={styles.buttonText}>
                Cancel
            </Button>

            <Button
                mode="contained"
                contentStyle={{flexDirection: 'row-reverse'}}
                onPress={() => navigation.navigate('Add Log')}
                style={styles.createButton}
                textColor="#FFFFFF"
                labelStyle={styles.buttonText}>
                Create
            </Button>
        </View>
    </SafeAreaView>
    );
}

export default YourLogs;