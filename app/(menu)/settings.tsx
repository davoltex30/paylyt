import React, {useState} from 'react';
import {Linking, View, StyleSheet, TouchableOpacity, StatusBar, Switch} from 'react-native';
import { Avatar } from 'react-native-paper';
import {SafeAreaView} from "react-native-safe-area-context"
import {useRouter} from "expo-router";
import {FontAwesome6, Fontisto, MaterialCommunityIcons, Octicons} from "@expo/vector-icons";
import {ThemedText} from "@/components/ThemedText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import NotificationBell from "@/components/NotificationBell";
import BackButton from "@/components/button/BackButton";

const Settings = () => {
    const router = useRouter()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    ///todo expo-notification
    return (
        <SafeAreaView style={{flex: 1, padding: 15}}>
            <StatusBar backgroundColor={"white"} />
            <View style={{flexDirection: 'row', justifyContent: "space-between",}}>
                <BackButton/>
                <ThemedText type={"subtitle"} style={{flex: 2, textAlign: 'center',}}>Settings</ThemedText>
                <NotificationBell/>
            </View>
            <View style={{flexDirection: "column", gap: 15, marginTop: 20}}>
                <ThemedText type={"defaultSemiBold"}>My Cards</ThemedText>
                <View style={styles.card}>
                    <View style={{flexDirection: "row", alignItems: 'center', gap: 10}}>
                        <View style={{backgroundColor: "#FF636320", padding: 3, borderRadius: 5}}>
                            <FontAwesome6 name={"cc-mastercard"} color={"#FF6363"} size={40}/>
                        </View>
                        <View>
                            <ThemedText type={'defaultSemiBold'}>Debit Card</ThemedText>
                            <ThemedText style={{color: "gray", }}>Master card</ThemedText>
                        </View>
                    </View>
                    <View style={{backgroundColor: "#456EFE20", padding: 3, borderRadius: 5}}>
                        <MaterialCommunityIcons name={"chevron-right"} color={"#456EFE"} size={24}/>
                    </View>
                </View>
                <ThemedText type={"defaultSemiBold"}>Card settings</ThemedText>
                <View style={styles.card}>
                    <View style={{flexDirection: "row", alignItems: 'center', gap: 10}}>
                        <View style={{backgroundColor: "#FF636320", padding: 3, borderRadius: 5}}>
                            <MaterialCommunityIcons name={"credit-card-lock-outline"} color={"#FF6363"} size={24}/>
                        </View>
                        <ThemedText>Lock card</ThemedText>
                    </View>
                    <Switch
                        trackColor={{false: '#d3d3d3', true: '#456EFE'}}
                        thumbColor={'#f4f3f4'}
                        ios_backgroundColor={"#d3d3d3"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.card}>
                    <View style={{flexDirection: "row", alignItems: 'center', gap: 10}}>
                        <View style={{backgroundColor: "#456EFE20", padding: 3, borderRadius: 5}}>
                            <MaterialCommunityIcons name={"credit-card-off-outline"} color={"#456EFE"} size={24}/>
                        </View>
                        <ThemedText>Deactivate card</ThemedText>
                    </View>
                    <Switch
                        trackColor={{false: '#d3d3d3', true: '#456EFE'}}
                        thumbColor={'#f4f3f4'}
                        ios_backgroundColor={"#d3d3d3"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <ThemedText type={"defaultSemiBold"}>Notification</ThemedText>
                <View style={styles.card}>
                    <View style={{flexDirection: "row", alignItems: 'center', gap: 10}}>
                        <View style={{backgroundColor: "#13C99920", padding: 3, borderRadius: 5}}>
                            <Fontisto name={"bell"} color={"#13C999"} size={24}/>
                        </View>
                        <ThemedText>Notification</ThemedText>
                    </View>
                    <Switch
                        trackColor={{false: '#d3d3d3', true: '#456EFE'}}
                        thumbColor={'#f4f3f4'}
                        ios_backgroundColor={"#d3d3d3"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Settings;
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "white",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    }
});
