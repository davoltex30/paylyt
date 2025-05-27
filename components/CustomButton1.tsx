import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import React from 'react';

type ButtonProps = {
    title: string;
} & TouchableOpacityProps;

export const CustomButton = ({title, ...props}: ButtonProps) => {
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'button');
    return (
        <TouchableOpacity
            style={[
                styles.button,
                props.disabled && styles.disabledButton,
                {color},
            ]}
            {...props}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 120,
    },
    disabledButton: {
        opacity: 0.6,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});