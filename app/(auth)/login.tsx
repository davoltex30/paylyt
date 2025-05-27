import React from 'react';

import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import CustomTextInput from "@/components/inputs/CustomTextInput";
import CustomPasswordInput from "@/components/inputs/CustomPasswordInput";
import CustomButton from "@/components/CustomButton";
import {Link, useRouter} from "expo-router";
import {ThemedText} from "@/components/ThemedText";

const Login = () => {
    const router = useRouter()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#23303B"}/>
            <ThemedText type={"title"} style={{color: 'white', textAlign: "center", marginBottom: 15}}>Login to your account</ThemedText>
            <View style={{flexDirection: 'column', gap: 10}}>
                <CustomTextInput placeholder={"User Id"}/>
                <CustomPasswordInput placeholder={"Password"}/>
                <CustomButton title={"Sign-Up"} onPress={() => router.navigate("/(tabs)")}/>
                <ThemedText style={{color: 'white', marginLeft: 10}}>Don&#39;t have an account? <Link href={"/(auth)/register"} style={{color: '#456EFE'}}><Text>Sign Up</Text></Link></ThemedText>
            </View>
        </SafeAreaView>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#23303B',
        flexDirection: 'column', justifyContent: "flex-end"
    }
});
