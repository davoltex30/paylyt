import React from 'react';

import {StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle} from 'react-native';

interface InputWithPlaceholderProps extends TextInputProps {
    placeholder: string;
    style?: StyleProp<TextStyle>
}

const CustomTextInput:React.FC<InputWithPlaceholderProps> = ({ placeholder, style={}, ...props }) => {
    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={placeholder}
            placeholderTextColor="#999"
            {...props}
        />
    );
};

export default CustomTextInput;
const styles = StyleSheet.create({
    input: {
        height: 55,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
});
