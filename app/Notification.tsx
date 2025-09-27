import React from 'react';
import {Linking, View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Avatar } from 'react-native-paper';
import {SafeAreaView} from "react-native-safe-area-context"
import {useRouter} from "expo-router";
import {ThemedText} from "@/components/ThemedText";
import NotificationBell from "@/components/NotificationBell";
import BackButton from "@/components/button/BackButton";

const Notification = () => {
    const router = useRouter()
    return (
        <SafeAreaView style={{flex: 1, }}>
            <StatusBar backgroundColor={"white"} />
            <View style={{flexDirection: 'row', justifyContent: "space-between", padding: 15,}}>
                <BackButton/>
                <ThemedText style={{flex: 2, textAlign: 'center',}}>Notification</ThemedText>
                <NotificationBell/>
            </View>
            <View>

            </View>
        </SafeAreaView>
    );
};

export default Notification;
const styles = StyleSheet.create({
});
