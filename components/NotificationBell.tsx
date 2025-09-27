import React from 'react';

import {TouchableOpacity} from 'react-native';
import {Avatar} from "react-native-paper";
import {useRouter} from "expo-router";

const NotificationBell = () => {
    const router = useRouter()
    return (
        <TouchableOpacity onPress={() => router.back()} style={{flex: 1, alignItems: "flex-end"}}>
            <Avatar.Icon icon={"bell"} size={35} style={{backgroundColor: '#d3d3d3'}}/>
        </TouchableOpacity>
    );
};

export default NotificationBell;
