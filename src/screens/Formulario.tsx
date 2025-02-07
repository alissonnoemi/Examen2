import React, { useState } from 'react';
import { View, StatusBar, TouchableOpacity, Text } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { BodyComponents } from '../components/BodyComponents';
import { InputComponent } from '../components/InputComponent';
import { PRIMARY_COLOR } from '../theme/commos/constants';
import { styles } from '../theme/appTheme';

interface Numeros {
    num1: number;
    num2: number;
}

export const Formulario = () => {
    const navigation = useNavigation();
    const [numeros, setNumeros] = useState<Numeros>({ num1: 0, num2: 0 });
    const [resultado, setResultado] = useState<string>('');

    const handleChange = (name: string, value: string) => {
        const parsedValue = parseInt(value, 10);
        setNumeros(state => ({
            ...state,
            [name]: isNaN(parsedValue) ? 0 : parsedValue
        }));
    };

    const compararNumeros = () => {
        const { num1, num2 } = numeros;

    
        if (num1 === num2) {
            setResultado('Los números son iguales.');
        } else if (num1 > num2) {
            setResultado(`${num1} es mayor que ${num2}.`);
        } else {
            setResultado(`${num2} es mayor que ${num1}.`);
        }
    };

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <BodyComponents>
                <InputComponent
                    placeholder='Número 1'
                    keyboardType='numeric'
                    handleChange={handleChange}
                    name='num1'
                    value={numeros.num1 === 0 ? '' : numeros.num1.toString()}
                />
                <InputComponent
                    placeholder='Número 2'
                    keyboardType='numeric'
                    handleChange={handleChange}
                    name='num2'
                    value={numeros.num2 === 0 ? '' : numeros.num2.toString()}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={compararNumeros}
                >
                    <Text>{'<='}</Text>
                </TouchableOpacity>
                <Text>{resultado}</Text>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Formulario2' }))}
                >
                    <Text>Formulario 2</Text>
                </TouchableOpacity>
            </BodyComponents>
        </View>
    );
};