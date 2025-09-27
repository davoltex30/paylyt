import React from 'react';

import {Text, View, StyleSheet, Platform, ScrollView, KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import BackButton from "@/components/button/BackButton";
import {ThemedText} from "@/components/ThemedText";
import NotificationBell from "@/components/NotificationBell";
import CustomTextInput from "@/components/inputs/CustomTextInput";

const Complaint = () => {
    return (
        <SafeAreaView style={{flex: 1, padding: 15}}>
            <View style={{flexDirection: 'row', justifyContent: "space-between",}}>
                <BackButton/>
                <ThemedText type={"subtitle"} style={{flex: 2, textAlign: 'center',}}>Complain</ThemedText>
                <NotificationBell/>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingContainer}
            >
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        marginBottom: 20,
                    }}
                    keyboardShouldPersistTaps="handled"
                >

                    <View style={{marginTop: 15, gap: 15}}>
                        <ThemedText type={"defaultSemiBold"} style={{fontSize: 20, marginBottom: 10}}>Enter your details</ThemedText>
                        <CustomTextInput placeholder={"Name"}/>
                        <CustomTextInput placeholder={"Email"}/>
                        <CustomTextInput placeholder={"Phone Number"}/>
                        <CustomTextInput placeholder={"CNIC"}/>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Complaint;
const styles = StyleSheet.create({
    keyboardAvoidingContainer: {
        flex: 1
    }
});
