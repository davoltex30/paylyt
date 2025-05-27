import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";

const MenuLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'fade',
                contentStyle: { backgroundColor: '#fff' },
            }}
        >
            <Stack.Screen name="complaint" />
            <Stack.Screen name="contact" />
        </Stack>
    );
};

export default MenuLayout;
const styles = StyleSheet.create({});
