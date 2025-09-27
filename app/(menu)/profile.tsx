import React from 'react';

import {View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar} from "react-native-paper";
import {ThemedText} from "@/components/ThemedText";
import BackButton from "@/components/button/BackButton";
import NotificationBell from "@/components/NotificationBell";
import {Feather, FontAwesome6, Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";

const Profile = () => {
    const router = useRouter()
    return (
        <SafeAreaView style={{flex: 1, padding: 15}}>
            <StatusBar backgroundColor={"white"}/>
            <View style={{flexDirection: 'row', justifyContent: "space-between",}}>
                <BackButton/>
                <ThemedText type={"subtitle"} style={{flex: 2, textAlign: 'center',}}>Profile</ThemedText>
                <NotificationBell/>
            </View>
            <View style={{flexDirection: "column", alignItems: "center", justifyContent: 'center', marginTop: 10}}>
                <TouchableOpacity onPress={() => router.navigate("/edit-profile")} style={{position: 'relative',}}>
                    <Avatar.Icon icon={"account"} size={90}/>
                    <Avatar.Icon
                        icon={({ size, color }) => (
                            <Feather name="edit" size={size} color={color} />
                        )}
                        size={25}
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            borderColor: "white",
                            borderWidth: 2
                        }}
                    />
                </TouchableOpacity>
                <ThemedText style={{fontSize: 20, color: "#456EFE", marginTop: 10}} type={"defaultSemiBold"}>John
                    Doe</ThemedText>
                <ThemedText style={{fontSize: 16, color: "gray",}}>Cameroon</ThemedText>
            </View>
            <View style={{marginTop: 15, gap: 10}}>
                <View style={styles.card}>
                    <ThemedText type={"defaultSemiBold"} style={{fontSize: 18}}>Total Balance</ThemedText>
                    <ThemedText>$500</ThemedText>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center', gap: 5}}>
                    <View style={styles.balanceStatusCard}>
                        <View style={{borderRadius: 5, backgroundColor: "#13C99920", padding: 3, width: 35, aspectRatio: 1, flexDirection: "row", justifyContent: 'center', alignItems: "center"}}>
                            <Ionicons name={"wallet-outline"} color={"#13C999"} size={25}/>
                        </View>
                        <ThemedText type={"small"} style={{textAlign: "center"}}>Active Balance</ThemedText>
                        <ThemedText type={"defaultSemiBold"}>$50.00</ThemedText>
                    </View>
                    <View style={styles.balanceStatusCard}>
                        <View style={{borderRadius: 5, backgroundColor: "#FF636320", padding: 3, width: 35, aspectRatio: 1, flexDirection: "row", justifyContent: 'center', alignItems: "center"}}>
                            <FontAwesome6 name={"hand-holding-dollar"} color={"#FF6363"} size={25}/>
                        </View>
                        <ThemedText type={"small"} style={{textAlign: "center"}}>loan</ThemedText>
                        <ThemedText  type={"defaultSemiBold"}>$50.00</ThemedText>
                    </View>
                    <View style={styles.balanceStatusCard}>
                        <View style={{borderRadius: 5, backgroundColor: "#456EFE20", padding: 3, width: 35, aspectRatio: 1, flexDirection: "row", justifyContent: 'center', alignItems: "center"}}>
                            <FontAwesome6 name={"file-invoice-dollar"} color={"#456EFE"} size={25}/>
                        </View>
                        <ThemedText type={"small"} style={{textAlign: "center"}}>Savings</ThemedText>
                        <ThemedText  type={"defaultSemiBold"}>$50.00</ThemedText>
                    </View>
                </View>
            </View>
            <View style={{ marginVertical: 10}}>
                <ThemedText type={"defaultSemiBold"} style={{fontSize: 20, marginBottom: 10}}>Recent Transactions</ThemedText>
                <View style={styles.card}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10,}}>
                        <View style={{width: 50, aspectRatio: 1, backgroundColor: "gray", borderRadius: 10}}/>
                        <View>
                            <ThemedText type={"defaultSemiBold"}>Neflix</ThemedText>
                            <ThemedText type={"small"} style={{color: "gray"}}>3 days ago</ThemedText>
                        </View>
                    </View>
                    <ThemedText type={"defaultSemiBold"}>$50</ThemedText>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Profile;
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
            height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 1.51,
        elevation: 2
    },
    balanceStatusCard: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        gap: 3,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 1.51,
        elevation: 2
    }
});
