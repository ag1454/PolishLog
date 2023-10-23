import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    text: {
        fontWeight: "bold",
        textAlign: "center",
        verticalAlign: "middle",
        fontSize: 50,
        color: "black",
        marginBottom: 100,
        fontFamily: 'Cochin',
      },

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },

    buttonText: {
      fontFamily: 'Cochin',
      fontSize: 20,
    },

    button: {
      padding: 10,
      borderRadius: 30,
    }
});