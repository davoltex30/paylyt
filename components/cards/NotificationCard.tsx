import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Avatar} from "react-native-paper";
import {ThemedText} from "@/components/ThemedText";

interface NotificationProp {
    amount: number,
    sender: string,
}

const NotificationCard: React.FC<NotificationProp> = ({amount, sender}) => {
    return (
        <View style={{flexDirection: "row", padding: 10, alignItems: "center", gap: 5, backgroundColor: "white"}}>
            <Avatar.Icon icon={"account"}/>
            <ThemedText>You received a payment of <ThemedText
                type={"defaultSemiBold"}>{amount}</ThemedText>from <ThemedText>{sender}</ThemedText></ThemedText>
        </View>
    );
};

export default NotificationCard;
const styles = StyleSheet.create({});
