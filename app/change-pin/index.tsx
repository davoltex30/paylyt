import React, {useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import BackButton from "@/components/button/BackButton";
import {ThemedText} from "@/components/ThemedText";
import NotificationBell from "@/components/NotificationBell";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image} from "expo-image";
import CustomTextInput from "@/components/inputs/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import {useRouter} from "expo-router";

const ChangePin = () => {
    const router = useRouter()
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleNext = () => {
        router.navigate({
            pathname: "/change-pin/otp",
            params: {
                phoneNumber
            }
        });
    }
    return (
        <SafeAreaView style={{flex: 1, padding: 15}}>
            <StatusBar backgroundColor={"white"}/>
            <View style={{flexDirection: 'row', justifyContent: "space-between",}}>
                <BackButton/>
                <ThemedText type={"subtitle"} style={{flex: 2, textAlign: 'center',}}>Mobile Number</ThemedText>
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
                        source={require("../../assets/images/message.png")}
                        contentFit={"contain"}
                        transition={1000}
                    />
                </View>
                <View style={{marginTop: 15, gap: 10}}>
                    <ThemedText type={"subtitle"} style={{textAlign: 'center', fontWeight: 600}}>Mobile Number</ThemedText>
                    <ThemedText style={{color: "gray", textAlign: 'center'}}>We need to send
                        OTP to authenticate your number to change your pin</ThemedText>
                </View>

                <View style={{width: '100%', marginTop: 50}}>
                    <CustomTextInput placeholder={"Phone number"} value={phoneNumber} onChangeText={setPhoneNumber} keyboardType={"phone-pad"}/>
                </View>
            </View>
            <View style={{flex: 1, justifyContent: "flex-end"}}>
                <CustomButton title={"Next"} onPress={() => handleNext()}/>
            </View>
        </SafeAreaView>
    );
};

export default ChangePin;
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
    },
});
