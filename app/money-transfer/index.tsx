import React from 'react';

import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import BackButton from "@/components/button/BackButton";
import {ThemedText} from "@/components/ThemedText";
import NotificationBell from "@/components/NotificationBell";

const MoneyTransfer = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor={"white"}/>
            <View style={{flexDirection: 'row', justifyContent: "space-between",}}>
                <BackButton/>
                <ThemedText type={"subtitle"} style={{flex: 2, textAlign: 'center',}}>Money Transfer</ThemedText>
                <NotificationBell/>
            </View>

        </SafeAreaView>
    );
};

export default MoneyTransfer;
const styles = StyleSheet.create({});
