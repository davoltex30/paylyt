import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import BackButton from "@/components/button/BackButton";
import {ThemedText} from "@/components/ThemedText";
import NotificationBell from "@/components/NotificationBell";

const Charity = () => {
    return (
        <SafeAreaView style={{flex: 1,}}>
            <View style={{flexDirection: 'row', justifyContent: "space-between", padding: 15,}}>
                <BackButton/>
                <ThemedText style={{flex: 2, textAlign: 'center',}}>Charity</ThemedText>
                <NotificationBell/>
            </View>

        </SafeAreaView>
    );
};

export default Charity;
const styles = StyleSheet.create({});
