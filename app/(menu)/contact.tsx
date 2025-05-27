import React from 'react';
import {Linking, View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Avatar } from 'react-native-paper';
import {SafeAreaView} from "react-native-safe-area-context"
import {useRouter} from "expo-router";
import {Octicons} from "@expo/vector-icons";
import {ThemedText} from "@/components/ThemedText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Contact = () => {
    const router = useRouter()
    const onCall = () => {
        Linking.openURL('tel://+1234567890');
    }
    const onEmail = () => {
        Linking.openURL(`mailto:example@gmail.com`)
    }
    return (
        <SafeAreaView style={{flex: 1, }}>
            <StatusBar backgroundColor={"white"} />
            <View style={{flexDirection: 'row', justifyContent: "space-between", padding: 15,}}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Avatar.Icon icon={"chevron-left"} size={30} style={{backgroundColor: '#d3d3d3'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.back()} style={{position: 'relative',}}>
                    <Avatar.Icon icon={"bell"} size={30} style={{backgroundColor: '#d3d3d3'}}/>
                </TouchableOpacity>
                <ThemedText style={styles.headerText}>Contact</ThemedText>
            </View>
            <View style={{flexDirection: 'column', gap: 15, padding: 15}}>
                <ThemedText>Call</ThemedText>
                <TouchableOpacity onPress={onCall} style={{backgroundColor: '#ececec', flexDirection: 'row', gap: 5, padding: 15, alignItems: 'center', borderRadius: 10}}>
                    <MaterialIcons name={"phone"} color={"#808080"} size={24}/>
                    <ThemedText style={{color: "#808080"}}>+123456789</ThemedText>
                </TouchableOpacity>
                <ThemedText>Email</ThemedText>
                <TouchableOpacity onPress={onEmail} style={{backgroundColor: '#ececec', flexDirection: 'row', gap: 5, padding: 15, alignItems: 'center', borderRadius: 10}}>
                    <MaterialIcons name={"mail"} color={"#808080"} size={24}/>
                    <ThemedText style={{color: "#808080"}}>example@gmail.com</ThemedText>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Contact;
const styles = StyleSheet.create({
    headerText: {
        position: 'absolute',
        top: '50%',     // Move top edge to 50% of parent
        left: '50%', // Move left edge to 50% of parent
        fontWeight: "bold",
        textAlign: 'center',
    }
});
