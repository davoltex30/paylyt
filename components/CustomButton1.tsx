import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator, GestureResponderEvent, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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

const Button: React.FC<ButtonProps> = ({
                                           title,
                                           onPress,
                                           disabled = false,
                                           loading = false,
                                           iconName,
                                           iconPosition = 'left',
                                           iconColor = '#fff',
                                           iconSize = 20,
                                       }) => {
    const color = useThemed
    return (
        <TouchableOpacity
            style={styles.button}
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

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginVertical: 8,
    },
    primary: {
        backgroundColor: '#007AFF',
    },
    text: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    disabled: {
        opacity: 0.6,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
    primaryText: {
        color: '#fff',
    },
    secondaryText: {
        color: '#fff',
    },
    outlineText: {
        color: '#007AFF',
    },
    textOnlyText: {
        color: '#007AFF',
    },

});

export default Button;