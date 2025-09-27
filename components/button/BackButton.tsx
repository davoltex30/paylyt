import React from 'react';
import { TouchableOpacity} from 'react-native';
import {Avatar} from "react-native-paper";
import {useRouter} from "expo-router";

const BackButton = () => {
    const router = useRouter()
    return (
        <TouchableOpacity onPress={() => router.back()} style={{flex: 1, alignItems: 'flex-start'}}>
            <Avatar.Icon icon={"chevron-left"} size={35} style={{backgroundColor: '#d3d3d3'}}/>
        </TouchableOpacity>
    );
};

export default BackButton;
