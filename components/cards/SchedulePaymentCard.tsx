import React from 'react';

import {View, StyleSheet} from 'react-native';
import {ThemedText} from "@/components/ThemedText";
import {format} from "date-fns";

type SchedulePaymentProp = {
    icon: string,
    date: string,
    title: string,
    amount: number,
}

const SchedulePayment: React.FC<SchedulePaymentProp> = ({icon, date, title, amount}) => {
    return (
        <View style={styles.card}>
            <View style={{flexDirection: "row", gap: 10, alignItems: 'center'}}>
                <View style={{width: 35, aspectRatio: 1, backgroundColor: "#d3d3d3", borderRadius: 5,}}/>
                <View>
                    <ThemedText style={{fontSize: 16}} type={"defaultSemiBold"}>{title}</ThemedText>
                    <ThemedText style={{color: 'gray',}} type={"small"}>Next payment:
                        <ThemedText style={{color: "#456EFE"}} type={"small"}>{format(date, "dd/mm/yy")}</ThemedText>
                    </ThemedText>
                </View>
            </View>
            <ThemedText style={{fontSize: 20}} type={"defaultSemiBold"}>{amount}<ThemedText type={"small"} style={{fontSize: 14}}>XAF</ThemedText></ThemedText>
        </View>
    );
};

export default SchedulePayment;
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
    }
});
