import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const Imagen1 = () => {
  const navigation = useNavigation();
  return (

    <View>
      <Image
        source={{ uri: 'https://cdn-images.dzcdn.net/images/cover/e14cca0e8885dbb4c4733a4e32502a97/0x1900-000000-80-0-0.jpg' }}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Imagen2' }))}>
        <Text style={styles.buttonText}>Imagen 2</Text>
      </TouchableOpacity>
    </View>
  )
}