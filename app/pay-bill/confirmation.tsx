import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import BackButton from "@/components/button/BackButton";
import {ThemedText} from "@/components/ThemedText";
import NotificationBell from "@/components/NotificationBell";
import {useLocalSearchParams, useRouter} from "expo-router";
import CustomButton from "@/components/CustomButton";

const Confirmation = () => {
    const router = useRouter()
    const params = useLocalSearchParams();
    const { billType, meterNumber, amount } = params;
    return (
        <SafeAreaView style={{flex: 1, padding: 15}}>
            <View style={{flexDirection: 'row', justifyContent: "space-between",}}>
                <BackButton/>
                <ThemedText type={"subtitle"} style={{flex: 2, textAlign: 'center',}}>confirmation</ThemedText>
                <NotificationBell/>
            </View>
            <View style={{gap: 20, marginVertical: 20}}>
                <View>
                    <ThemedText type={"title"} style={{color: "#456EFE", textAlign: 'center',}}>Are you sure?</ThemedText>
                    <ThemedText style={{color: "gray", textAlign: 'center'}}>Please make sure you want to pay {billType} bill </ThemedText>
                </View>

                <View style={{backgroundColor: "#d3d3d380", padding: 10, borderRadius: 10, gap: 15}}>
                    <ThemedText type={"subtitle"} style={{textTransform: "capitalize", textAlign: "center"}}>{billType} Bill</ThemedText>
                    <ThemedText type={"title"} style={{textTransform: "capitalize", textAlign: "center"}}>{Number(amount).toLocaleString()} <ThemedText type={"default"} style={{color: 'gray', textTransform: "uppercase"}}>XAF</ThemedText></ThemedText>

                    <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center",}}>
                        <ThemedText style={{color: 'gray'}}>Bill Number</ThemedText>
                        <ThemedText type={"defaultSemiBold"}>{meterNumber}</ThemedText>
                    </View>
                </View>
                <CustomButton
                    title={"Pay Now"}
                    onPress={() => router.navigate({
                        pathname: "/pay-bill/success",
                        params: {
                            billType,
                            meterNumber,
                            amount
                        }
                    })}
                />
            </View>
        </SafeAreaView>
    );
};

export default Confirmation;
const styles = StyleSheet.create({});
