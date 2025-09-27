import React from 'react';

import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemedText} from "@/components/ThemedText";
import {MaterialCommunityIcons} from "@expo/vector-icons";

type QuickActionProps = {
    title: string
    iconColor: string
    iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    onPress: () => void
};
const QuickActionCard: React.FC<QuickActionProps> = ({title, iconName, onPress, iconColor}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View style={{width: 50, aspectRatio: 1, borderRadius: 5, backgroundColor: `${iconColor}40`, flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
                <MaterialCommunityIcons name={iconName} size={30} color={iconColor}/>
            </View>
            <ThemedText type={"defaultSemiBold"} style={{fontSize: 14}}>{title}</ThemedText>
        </TouchableOpacity>
    );
};

export default QuickActionCard;
const styles = StyleSheet.create({
    card: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 115,
        aspectRatio: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3,
        marginRight: 15
    }
});
