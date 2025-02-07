import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { BodyComponents } from '../components/BodyComponents'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR } from '../theme/commos/constants';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../theme/appTheme';

export const Home = () => {
    const navigation = useNavigation();
    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <BodyComponents>
                <Text style={styles.title}>Examen 2</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Imagen1' }))}>
                    <Text style={styles.buttonText}>Imagen 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Imagen2' }))}>
                    <Text style={styles.buttonText}>Imagen 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Formulario' }))}>
                    <Text style={styles.buttonText}>Formulario 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Formulario2' }))}>
                    <Text style={styles.buttonText}>Formulario 2</Text>
                </TouchableOpacity>

            </BodyComponents>

        </View>
    )
}