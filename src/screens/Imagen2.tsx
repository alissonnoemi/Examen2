import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const Imagen2 = () => {
  const navigation = useNavigation();
  return (

    <View>
      <Image
        source={{ uri: 'https://pbs.twimg.com/card_img/1886552733463044096/74eQSD7S?format=jpg&name=small' }}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Formulario' }))}>
        <Text style={styles.buttonText}>Formulario 1</Text>
      </TouchableOpacity>
    </View>
  )
}
