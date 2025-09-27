import React from 'react';

import {View, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import BackButton from "@/components/button/BackButton";
import {ThemedText} from "@/components/ThemedText";
import NotificationBell from "@/components/NotificationBell";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image} from "expo-image";
import CustomButton from "@/components/CustomButton";
import { OtpInput } from "react-native-otp-entry";
import {useLocalSearchParams} from "expo-router";

const OTP = () => {
    const params = useLocalSearchParams();
    const { phoneNumber} = params;
    return (
        <SafeAreaView style={{flex: 1, padding: 15}}>
            <StatusBar backgroundColor={"white"}/>
            <View style={{flexDirection: 'row', justifyContent: "space-between",}}>
                <BackButton/>
                <ThemedText type={"subtitle"} style={{flex: 2, textAlign: 'center',}}>OTP</ThemedText>
                <NotificationBell/>
            </View>
            <View style={{flex: 2, justifyContent: 'center', alignItems: "center"}}>
                <View style={{
                    backgroundColor: "#456EFE",
                    height: 150,
                    aspectRatio: 1,
                    borderRadius: 500,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image
                        style={styles.image}
                        source={require("../../assets/images/otp.png")}
                        contentFit={"contain"}
                        transition={1000}
                    />
                </View>
                <View style={{marginTop: 15, gap: 10}}>
                    <ThemedText type={"subtitle"} style={{textAlign: 'center', fontWeight: 600}}>OTP</ThemedText>
                    <ThemedText style={{color: "gray", textAlign: 'center'}}>We have sent the code to <ThemedText type={"defaultSemiBold"}>{phoneNumber}</ThemedText> verify your messages and input the code below</ThemedText>
                </View>

                <View style={{width: '100%', marginTop: 50}}>
                    <OtpInput
                        numberOfDigits={6}
                        onTextChange={(text) => console.log(text)}
                        focusColor="#3f51b5" // Color when focused
                        focusStickBlinkingDuration={500}
                        theme={{
                            containerStyle: {
                                marginBottom: 20,
                            },
                            inputsContainerStyle: {
                                justifyContent: 'space-between',
                            },
                            pinCodeContainerStyle: {
                                width: 45,
                                height: 45,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 5,
                            },
                            pinCodeTextStyle: {
                                fontSize: 18,
                            },
                            focusStickStyle: {
                                width: 2,
                                height: 30,
                                backgroundColor: '#3f51b5',
                            },
                            focusedPinCodeContainerStyle: {
                                borderColor: '#3f51b5',
                            },
                        }}
                    />
                </View>
            </View>
            <View style={{flex: 1, justifyContent: "flex-end"}}>
                <View style={{marginBottom: 10}}>
                    <ThemedText style={{textAlign: "center"}}>Didn&#39;t receive any code?</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type={"defaultSemiBold"} style={{textAlign: 'center', textDecorationLine: "underline"}}>Resend code</ThemedText>
                    </TouchableOpacity>
                </View>
                <CustomButton title={"Next"} onPress={() => {}}/>
            </View>
        </SafeAreaView>
    );
};

export default OTP;
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
    },
});
