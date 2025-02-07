import { StyleSheet } from "react-native";
import { SECONDARY_COLOR } from "./commos/constants";

export const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 35,
        paddingTop: 40,
        paddingHorizontal: 35
    },
    button: {
        backgroundColor: '#B2A5FF', 
        padding: 10,
        margin: 5,
        borderRadius: 5, 
        alignItems: 'center', 
        elevation: 2, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    title:{
        color: SECONDARY_COLOR,
        fontSize: 25,
        paddingHorizontal: 35,
        fontWeight: 'bold',
        paddingVertical: 30,
        alignSelf: 'center'
    }
})