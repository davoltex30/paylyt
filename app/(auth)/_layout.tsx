import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";

const AuthLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'fade',
                contentStyle: { backgroundColor: '#fff' },
            }}
        >
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
            {/*<Stack.Screen name="forgot-password" />*/}
            {/* Add other auth screens here if needed */}
        </Stack>
    );
};

export default AuthLayout;
const styles = StyleSheet.create({});
