import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/ThemedText";
import {AntDesign, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {Avatar} from "react-native-paper";
import DashboardMenuModal, {DashboardMenuModalHandle} from "@/components/modals/DashboardMenuModal";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {useRef} from "react";

export default function HomeScreen() {
    const dashboardMenuModalRef = useRef<DashboardMenuModalHandle>(null);

    const openMenu = () => {
        dashboardMenuModalRef.current?.open();
    };
    const quickActions = [
        {
            title: "Money transfer",
            icon: AntDesign,
            iconName: "swap"
        },
        {
            title: "Pay bills",
            icon: Ionicons,
            iconName: "receipt-outline",
        },
        {
            title: "Bank to Bank",
            icon: MaterialCommunityIcons,
            iconName: "bank-transfer",
        }
    ]
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={openMenu}>
                <Avatar.Icon icon={"account"} size={40}/>
            </TouchableOpacity>
            <View>
                <ThemedText>Quick actions</ThemedText>
                <View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{padding: 5}}
                    >
                        {quickActions.map((item, index) => (
                            <View key={index}>
                                <View>

                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <DashboardMenuModal ref={dashboardMenuModalRef}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }

});
