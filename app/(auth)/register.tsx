import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import CustomTextInput from "@/components/inputs/CustomTextInput";

const Register = () => {
    return (
        <SafeAreaView style={styles.container}>
            <CustomTextInput placeholder={"Email"}/>
            <CustomTextInput placeholder={"Email"}/>
        </SafeAreaView>
    );
};

export default Register;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
});
