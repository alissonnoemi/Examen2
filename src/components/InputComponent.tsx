
import React from 'react';
import { TextInput, KeyboardType, View } from 'react-native'; 

interface Props {
    placeholder: string;
    keyboardType: KeyboardType;
    handleChange: (name: string, value: string) => void; 
    name: string;
    value: string; 
}

export const InputComponent = ({ placeholder, keyboardType, handleChange, name, value }: Props) => {
    const handleTextChange = (text: string) => {
        const numericValue = text.replace('', ''); 
        handleChange(name, numericValue); 
    };

    return (
        <View>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                onChangeText={handleTextChange}
                value={value} 
            />
        </View>
    );
};