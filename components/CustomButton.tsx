import React from 'react';

import {Text, View, StyleSheet, GestureResponderEvent, ActivityIndicator, TouchableOpacity} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import {useThemeColor} from "@/hooks/useThemeColor";


type ButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    loading?: boolean;
    iconName?: keyof typeof MaterialIcons.glyphMap;
    iconPosition?: 'left' | 'right';
    iconColor?: string;
    iconSize?: number;
};

const CustomButton:React.FC<ButtonProps> = ({title, onPress, disabled = false, loading = false, iconName, iconPosition = 'left', iconColor = '#fff', iconSize = 20,}) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
        >
            {loading ? (
                <ActivityIndicator color="#fff" />
            ) : (
                <>
                    {iconName && iconPosition === 'left' && (
                        <MaterialIcons
                            name={iconName}
                            size={iconSize}
                            color={iconColor}
                            style={styles.leftIcon}
                        />
                    )}
                    <Text style={styles.text}>{title}</Text>
                    {iconName && iconPosition === 'right' && (
                        <MaterialIcons
                            name={iconName}
                            size={iconSize}
                            color={iconColor}
                            style={styles.rightIcon}
                        />
                    )}
                </>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8,
        marginVertical: 8,
        backgroundColor: '#456EFE',
    },
    text: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        paddingVertical: 0,
        fontWeight: 'bold',
        color: "#fff"
    },
    disabled: {
        opacity: 0.6,
    },
    leftIcon: {
        marginRight: 8,
    },
    rightIcon: {
        marginLeft: 8,
    },
});
