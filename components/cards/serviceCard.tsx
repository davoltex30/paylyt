import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemedText} from "@/components/ThemedText";

interface ServiceCardProps {
    name: string;
    onPress: () => void;
    icon: React.ReactNode;
}

const ServiceCard:React.FC<ServiceCardProps> = ({name, onPress, icon}) => {
    return (
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: "center", marginRight: 10}}>
            <TouchableOpacity
                onPress={onPress}
                style={{flexDirection: 'row', justifyContent: "center", alignItems: 'center', width: 70, aspectRatio: 1, backgroundColor: "#d3d3d360", borderRadius: 10}}
            >
                {icon}
            </TouchableOpacity>
            <ThemedText>{name}</ThemedText>
        </View>
    );
};

export default ServiceCard;
const styles = StyleSheet.create({});
