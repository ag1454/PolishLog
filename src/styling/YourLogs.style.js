import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    
    expandHead:
    {
        flexDirection: "row",
        padding: 5,
        backgroundColor: "#FF92F4",
    },

    searchbar:
    {
        backgroundColor: "#FFFFFF",
        margin: 5,
    },

    button:
    {
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 45,
        height: 55,
    },

    addLogButton:
    {
        marginTop: 20,
        backgroundColor: "#FF92F4",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 30,
        width: 150,
    },

    buttonText:
    {
        fontFamily: 'Cochin',
        fontSize: 20,
    },

    logBox:
    {
        marginTop: 20,
        flexDirection: "row",
    },

    logBoxText:
    {
        alignItems: 'left',
        marginLeft: 20,
    },
});