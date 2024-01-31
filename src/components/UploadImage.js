// image uploader resources
// https://www.waldo.com/blog/add-an-image-picker-react-native-app
// https://www.geeksforgeeks.org/how-to-upload-and-preview-an-image-in-react-native/
import React, { useState } from "react"; 
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native"; 
import * as ImagePicker from "expo-image-picker";
  
export default function UploadImage() { 
    // Stores the selected image URI 
    const [file, setFile] = useState(null); 
  
    // Function to pick an image from  
    //the device's media library 
    const pickImage = async () => { 
        const { status } = await ImagePicker. 
            requestMediaLibraryPermissionsAsync(); 
  
        // Launch the image library and get 
        // the selected image 
        const result = 
            await ImagePicker.launchImageLibraryAsync(); 

            if (!result.cancelled)
            { 
                // If an image is selected (not cancelled),  
                // update the file state variable 
                setFile(result.uri); 
            } 
    }; 
  
    return ( 
        <View style={styles.container}> 
            {/* Button to choose an image */} 
            <TouchableOpacity style={styles.button} 
                onPress={pickImage}> 
                <Text style={styles.buttonText}> 
                    Choose Image 
                </Text> 
            </TouchableOpacity> 
  
            {/* Conditionally render the image  
            or error message */} 
            {file ? ( 
                // Display the selected image 
                <View style={styles.container2}> 
                    <Image source={{ uri: file }} 
                        style={styles.image} /> 
                </View> 
            ) : ( 
                // Display an error message if there's  
                // an error or no image selected 
                <View style={styles.container2}>
                {
                    <Image style={{ width: 200, height: 200 }} />
                }
                </View> 
            )} 
        </View> 
    ); 
} 
  
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        paddingBottom: 40, 
    },

    button: { 
        backgroundColor: "#FF92F4", 
        padding: 10, 
        borderRadius: 8, 
        marginBottom: 16, 
        shadowColor: "#000000", 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.4, 
        shadowRadius: 4, 
        elevation: 5, 
    },

    buttonText: { 
        color: "#FFFFFF", 
        fontSize: 16, 
        fontWeight: "bold",
        fontFamily: "Cochin",
    },

    image: { 
        width: 200, 
        height: 200, 
        borderRadius: 999, 
    },
     
    container2:{
        elevation:5,
        height:200,
        width:200,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
});