import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, Platform, ScrollView, KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/ThemedText";
import { RadioButton } from 'react-native-paper';
import BackButton from "@/components/button/BackButton";
import NotificationBell from "@/components/NotificationBell";
import CustomTextInput from "@/components/inputs/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import {useRouter} from "expo-router";

const PayBill = () => {
    const router = useRouter()
    const [billType, setBillType] = useState("electricity")
    const [meterNumber, setMeterNumber] = useState("")
    const [amount, setAmount] = useState("")

    const handleNext = () => {
        // Validate inputs if needed
        if (!meterNumber || !amount) {
            alert("Please fill all fields");
            return;
        }

        router.navigate({
            pathname: "/pay-bill/confirmation",
            params: {
                billType,
                meterNumber,
                amount
            }
        });
    }

    return (
        <SafeAreaView style={{flex: 1, padding: 15}}>
            <StatusBar backgroundColor={"white"}/>
            <View style={{flexDirection: 'row', justifyContent: "space-between",}}>
                <BackButton/>
                <ThemedText type={"subtitle"} style={{flex: 2, textAlign: 'center',}}>Pay bills</ThemedText>
                <NotificationBell/>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            >
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        marginBottom: 20,
                        gap: 15
                    }}
                    keyboardShouldPersistTaps="handled"
                >
                    <ThemedText type={"defaultSemiBold"}>Your bills</ThemedText>
                    <RadioButton.Group onValueChange={value => setBillType(value)} value={billType}>
                        <RadioButton.Item label="Electricity" value="electricity" style={styles.card}/>
                        <RadioButton.Item label="Water" value="water" style={styles.card}/>
                    </RadioButton.Group>
                    <ThemedText type={"defaultSemiBold"}>Bill Information</ThemedText>
                    <View style={{flexDirection: "column", gap: 10}}>
                        <CustomTextInput
                            placeholder={"Meter Number"}
                            value={meterNumber}
                            onChangeText={setMeterNumber}
                        />
                        <CustomTextInput
                            placeholder={"Amount"}
                            value={amount}
                            onChangeText={setAmount}
                            keyboardType="numeric"
                        />
                        <CustomButton
                            title={"Next"}
                            onPress={handleNext}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default PayBill;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "white",
        marginBottom: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 1.51,
        elevation: 2,
    },
});