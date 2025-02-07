import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Imagen1 } from '../screens/Imagen1';
import { Imagen2 } from '../screens/Imagen2';

import { Formulario2 } from '../screens/Formulario2';
import { Home } from '../screens/Home';
import { Formulario } from '../screens/Formulario';

type RootStackParams = {
    Home: undefined,
    Imagen1: undefined,
    Imagen2: undefined,
    Formulario: undefined,
    Formulario2: undefined

};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                cardStyle:{
                    backgroundColor: 'white'
                },
                headerStyle:{
                    elevation:10
                }
            }}
        >
            <Stack.Screen name="Home" options={{title: 'Inicio'}} component={Home} />
            <Stack.Screen name="Imagen1" options={{title: 'Imagen 1'}} component={Imagen1} />
            <Stack.Screen name="Imagen2"  options={{title: 'Imagen 2'}} component={Imagen2} />
            <Stack.Screen name="Formulario" options={{title: 'Formulario 1'}} component={Formulario} />
            <Stack.Screen name="Formulario2" options={{title: 'Formulario 2'}} component={Formulario2} />
        </Stack.Navigator>
    );
};

