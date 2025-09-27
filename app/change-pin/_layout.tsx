import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";

const ChangePinLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'fade',
                contentStyle: { backgroundColor: '#fff' },
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="otp" />
        </Stack>
    );
};

export default ChangePinLayout;
const styles = StyleSheet.create({});
