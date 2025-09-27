import React, {useCallback, useRef} from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import BackButton from "@/components/button/BackButton";
import {ThemedText} from "@/components/ThemedText";
import NotificationBell from "@/components/NotificationBell";
import CustomButton from "@/components/CustomButton";
import {useLocalSearchParams, useRouter} from "expo-router";
import {
    BottomSheetDefaultBackdropProps
} from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import {BottomSheetBackdrop, BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import {Avatar, Divider} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";
import {format} from "date-fns";

const Success = () => {
    const params = useLocalSearchParams();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const router = useRouter()
    const { billType, meterNumber, amount } = params;
    const renderBackdrop = useCallback(
        (props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        []
    );
    return (
        <SafeAreaView style={{flex: 1, padding: 15}}>
            <View style={{flexDirection: 'row', justifyContent: "center", alignItems: 'center', padding: 10}}>
                <ThemedText type={"subtitle"} style={{textAlign: 'center',}}>Success</ThemedText>
            </View>
            <View style={{gap: 20, marginVertical: 20}}>
                <View>
                    <ThemedText type={"title"} style={{color: "#456EFE", textAlign: 'center',}}>Congratulations!</ThemedText>
                    <ThemedText style={{color: "gray", textAlign: 'center'}}>Please make sure you want to pay {billType} bill </ThemedText>
                </View>
                <CustomButton
                    title={"View receipt"}
                    onPress={() => bottomSheetModalRef?.current?.present()}
                />
                <TouchableOpacity onPress={() => router.replace("/")}>
                    <ThemedText type={"link"} style={{textAlign: "center"}}>Back to Home</ThemedText>
                </TouchableOpacity>
            </View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={["45%"]}
                backdropComponent={renderBackdrop}
            >
                <BottomSheetView style={{gap: 10, padding: 15}}>
                    <ThemedText type={"subtitle"} style={{textTransform: "capitalize", textAlign: "center"}}>{billType} Bill</ThemedText>
                    <ThemedText type={"title"} style={{textTransform: "capitalize", textAlign: "center"}}>{Number(amount).toLocaleString()} <ThemedText type={"default"} style={{color: 'gray', textTransform: "uppercase"}}>XAF</ThemedText></ThemedText>

                    <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center", marginTop: 15}}>
                        <ThemedText style={{color: 'gray'}}>Bill Number</ThemedText>
                        <ThemedText type={"defaultSemiBold"}>{meterNumber}</ThemedText>
                    </View>
                    <Divider/>
                    <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center",}}>
                        <ThemedText style={{color: 'gray'}}>Date</ThemedText>
                        <ThemedText type={"defaultSemiBold"} style={{color: "gray"}}>{format(new Date(), 'MM/dd/yyyy')}</ThemedText>
                    </View>
                </BottomSheetView>
            </BottomSheetModal>
        </SafeAreaView>
    );
};

export default Success;
const styles = StyleSheet.create({});
