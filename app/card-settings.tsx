import React, {useState} from 'react';

import {Text, View, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/ThemedText";
import {FontAwesome6, MaterialCommunityIcons} from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import {useRouter} from "expo-router";

const CardSettings = () => {
    const router = useRouter()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView>
            <View style={{gap: 15}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10, alignItems: 'center'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: "#13C99920", borderRadius: 10, padding: 10}}>
                        <ThemedText style={{color: "#13C999", textAlign: "center"}}>Card limit</ThemedText>
                        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "flex-end", gap: 2}}>
                            <ThemedText style={{color: "#13C999", fontSize: 18}} type={"defaultSemiBold"}>200</ThemedText>
                            <ThemedText style={{color: "#13C999"}} type={"small"}>XAF</ThemedText>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: "#FF636320", borderRadius: 10, padding: 10}}>
                        <ThemedText style={{color: "#FF6363", textAlign: "center"}}>Card Status</ThemedText>
                        <ThemedText style={{color: "#FF6363", textAlign: "center", fontSize: 18}} type={"defaultSemiBold"}>Active</ThemedText>
                    </View>
                </View>
                <ThemedText type={"defaultSemiBold"}>Settings</ThemedText>
                <TouchableOpacity style={styles.card} onPress={() => router.navigate("/change-pin")}>
                    <View style={{flexDirection: "row", alignItems: 'center', gap: 10}}>
                        <View style={{backgroundColor: "#13C99920", padding: 3, borderRadius: 5}}>
                            <MaterialCommunityIcons name={"shield-account-variant-outline"} color={"#13C999"} size={24}/>
                        </View>
                        <ThemedText type={'default'}>Change pin</ThemedText>
                    </View>
                    <View style={{backgroundColor: "#456EFE20", padding: 3, borderRadius: 5}}>
                        <MaterialCommunityIcons name={"chevron-right"} color={"#456EFE"} size={24}/>
                    </View>
                </TouchableOpacity>
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
                <CustomButton title={"Save"} onPress={() => {}}/>
            </View>

        </SafeAreaView>
    );
};

export default CardSettings;
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
