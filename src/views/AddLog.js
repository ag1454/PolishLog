import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styling/AddLog.style.js';
import SafeAreaView from 'react-native-safe-area-view';
import { TextInput } from 'react-native-paper';
import UploadImage from '../components/UploadImage.js';
// image uploader: https://www.waldo.com/blog/add-an-image-picker-react-native-app

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
    </SafeAreaView>
    );
}

export default YourLogs;