import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Stack} from "expo-router";

const PayBillLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'fade',
                contentStyle: { backgroundColor: '#fff' },
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="confirmation" />
            <Stack.Screen name="success" />
        </Stack>
    );
};

export default PayBillLayout;
const styles = StyleSheet.create({});
