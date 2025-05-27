import React, {ComponentType} from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {ThemedText} from "@/components/ThemedText";
import {IconProps} from "@expo/vector-icons/build/createIconSet";

type QuickActionItem<T extends string> = {
    title: string;
    icon: ComponentType<IconProps<T>>;
    iconName: string;
    onPress: () => void
};
const QuickActionCard: React.FC<QuickActionItem> = ({title, iconName, onPress, icon}) => {
    return (
        <View style={}>
            <ThemedText>{}</ThemedText>
        </View>
    );
};

export default QuickActionCard;
const styles = StyleSheet.create({});
