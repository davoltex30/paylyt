import React, {useState} from 'react';

import {Text, View, StyleSheet, TextInput, TouchableOpacity, TextInputProps} from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface InputWithPlaceholderProps extends TextInputProps {
    placeholder: string;
}
// Props for the password input component
interface PasswordInputProps extends Omit<InputWithPlaceholderProps, 'secureTextEntry'> {
    iconColor?: string;
    iconSize?: number;
}
const CustomPasswordInput: React.FC<PasswordInputProps> = ({placeholder, iconColor = '#666', iconSize = 24, ...props}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev);
    };

    return (
        <View style={[styles.passwordContainer]}>
            <TextInput
                style={[styles.input]}
                placeholder={placeholder}
                placeholderTextColor="#999"
                secureTextEntry={!isPasswordVisible}
                {...props}
            />
            <TouchableOpacity
                style={styles.eyeIcon}
                onPress={togglePasswordVisibility}
                accessibilityLabel={isPasswordVisible ? 'Hide password' : 'Show password'}
                accessibilityRole="button"
            >
                <MaterialIcons
                    name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                    size={iconSize}
                    color={iconColor}
                />
            </TouchableOpacity>
        </View>
    );
};

export default CustomPasswordInput;
const styles = StyleSheet.create({
    passwordContainer: {
        position: 'relative',
        marginBottom: 15,
    },
    input: {
        height: 55,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: 13,
        zIndex: 1,
    },
});
