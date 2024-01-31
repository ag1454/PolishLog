import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    text:
    {
        fontFamily: 'Cochin',
        fontSize: 30,
    },

    textView:
    {
        width: "100%",
        alignItems: 'left',
        padding: 40,
    },

    textInput:
    {
        width: 300,
        marginTop: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: "#FFFFFF",      
    },

    buttonText: {
        fontFamily: 'Cochin',
        fontSize: 20,
    },

    createButton:
    {
        marginTop: 20,
        backgroundColor: "#FF92F4",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 30,
        width: 150,
    },

    cancelButton:
    {
        marginTop: 20,
        backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 30,
        width: 150,
    },

    buttonView:
    {
        flexDirection: "row",
        paddingBottom: 50,
        width: "100%",
        justifyContent: 'space-evenly',
    }
});