import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/ThemedText";
import {Ionicons, MaterialIcons, FontAwesome, Feather} from "@expo/vector-icons";
import {Avatar} from "react-native-paper";
import DashboardMenuModal, {DashboardMenuModalHandle} from "@/components/modals/DashboardMenuModal";
import {useRef} from "react";
import {useRouter} from "expo-router";
import QuickActionCard from "@/components/cards/QuickActionCard";
import SchedulePaymentCard from "@/components/cards/SchedulePaymentCard";
import ServiceCard from "@/components/cards/serviceCard";

export default function HomeScreen() {
    const router = useRouter()
    const dashboardMenuModalRef = useRef<DashboardMenuModalHandle>(null);

    const openMenu = () => {
        dashboardMenuModalRef.current?.open();
    };
    const quickActions = [
        {
            title: "Money transfer",
            iconName: "swap-horizontal" as const,
            iconColor: "#13C999",
            onPress: () => router.navigate("/money-transfer")
        },
        {
            title: "Pay bills",
            iconName: "receipt" as const,
            iconColor: "#4B78FE",
            onPress: () => router.navigate("/pay-bill")
        },
        {
            title: "Bank to Bank",
            iconName: "bank-transfer" as const,
            iconColor: "#8E949A",
            onPress: () => router.navigate("/money-transfer")
        }
    ]

    const schedulePayments = [
        {
            title: "Groceries",
            date: "2023-10-15",
            amount: 85.20,
            icon: ""
        },
        {
            title: "Electricity Bill",
            date: "2023-10-10",
            amount: 120.50,
            icon: ""
        },
    ];

    const services = [
        {
            name: "Recharge",
            icon: <Ionicons name="phone-portrait" size={24} color={"#456EFE"}/>,
            category: "Mobile",
            onPress: () => console.log("Recharge pressed"), // Does nothing but log
        },
        {
            name: "Loan",
            icon: <FontAwesome name="money" size={24} color={"#456EFE"}/>,
            category: "Finance",
            onPress: () => console.log("Loan pressed"), // Does nothing but log
        },
        {
            name: "Charity",
            icon: <MaterialIcons name="volunteer-activism" size={24} color={"#456EFE"}/>,
            category: "Donation",
            onPress: () => console.log("Charity pressed"), // Does nothing but log
        },
        {
            name: "Gift",
            icon: <Feather name="gift" size={24} color={"#456EFE"}/>,
            category: "Rewards",
            onPress: () => console.log("Gift pressed"), // Does nothing but log
        },
        {
            name: "Insurance",
            icon: <MaterialIcons name="shield" size={24} color={"#456EFE"}/>,
            category: "Finance",
            onPress: () => console.log("Insurance pressed"), // Does nothing but log
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={openMenu}>
                <Avatar.Icon icon={"account"} size={40}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate("/card-settings")}>
                <ThemedText>card settings</ThemedText>
            </TouchableOpacity>
            <View>
                <ThemedText type={"defaultSemiBold"} style={{fontSize: 18}}>Quick Actions</ThemedText>
                <View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{padding: 5}}
                    >
                        {quickActions.map((item, index) => (
                            <QuickActionCard title={item.title} iconColor={item.iconColor} iconName={item.iconName}
                                             onPress={item.onPress} key={index}/>
                        ))}
                    </ScrollView>
                </View>
                <ThemedText type={"defaultSemiBold"} style={{fontSize: 18}}>Services</ThemedText>
                <View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{padding: 5}}
                    >
                        {services.map((item, index) => (
                            <ServiceCard name={item.name} onPress={item.onPress} icon={item.icon} key={index}/>
                        ))}
                    </ScrollView>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                    <ThemedText type={"defaultSemiBold"} style={{fontSize: 18}}>Schedule Payments</ThemedText>
                    <TouchableOpacity>
                        <ThemedText style={{color: "gray"}} type={"defaultSemiBold"}>View all</ThemedText>
                    </TouchableOpacity>
                </View>
                <View style={{gap: 10, marginTop: 10}}>
                    {schedulePayments.map((item, index) => (
                        <SchedulePaymentCard icon={item.icon} date={item.date} title={item.title} amount={item.amount}
                                             key={index}/>
                    ))}
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
