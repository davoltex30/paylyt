import React, {forwardRef, useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {BottomSheetBackdrop, BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import {ThemedText} from "@/components/ThemedText";
import {Entypo} from "@expo/vector-icons";
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import {useRouter} from "expo-router";

export type DashboardMenuModalHandle = {
    open: () => void;
    close: () => void;
};

const DashboardMenuModal = forwardRef<DashboardMenuModalHandle>((props, ref) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const logoutConfirmationModalRef = useRef<BottomSheetModal>(null);
    const router = useRouter();

    // Expose open/close methods to parent
    useImperativeHandle(ref, () => ({
        open: () => bottomSheetModalRef.current?.present(),
        close: () => bottomSheetModalRef.current?.dismiss(),
    }));

    const renderBackdrop = useCallback(
        (props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        []
    );

    const handleLogoutPress = useCallback(() => {
        bottomSheetModalRef.current?.dismiss();
        logoutConfirmationModalRef.current?.present();
    }, []);

    const handleConfirmLogout = useCallback(() => {
        logoutConfirmationModalRef.current?.dismiss();
        // Add your logout logic here
        router.replace('/login'); // Example: navigate to login screen
    }, [router]);
    return (
        <>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={["45%"]}
                backdropComponent={renderBackdrop}
            >
                <BottomSheetView>
                    <TouchableOpacity
                        onPress={() => router.navigate("/(menu)/profile")}
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15}}>
                        <ThemedText>Manage Profile</ThemedText>
                        <Entypo name={"chevron-small-right"} color={"#808080"} size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.navigate("/(menu)/complaint")}
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15}}>
                        <ThemedText>Submit Complains</ThemedText>
                        <Entypo name={"chevron-small-right"} color={"#808080"} size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.navigate("/(menu)/settings")}
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15}}>
                        <ThemedText>Settings</ThemedText>
                        <Entypo name={"chevron-small-right"} color={"#808080"} size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.navigate("/(menu)/contact")}
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15}}>
                        <ThemedText>Contact Us</ThemedText>
                        <Entypo name={"chevron-small-right"} color={"#808080"} size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15}} onPress={handleLogoutPress}>
                        <ThemedText>Logout</ThemedText>
                        <Entypo name={"chevron-small-right"} color={"#808080"} size={24}/>
                    </TouchableOpacity>
                </BottomSheetView>
            </BottomSheetModal>
            <BottomSheetModal
                ref={logoutConfirmationModalRef}
                snapPoints={["25%"]}
                backdropComponent={renderBackdrop}
            >
                <BottomSheetView style={styles.confirmationContainer}>
                    <ThemedText style={styles.confirmationTitle}>Are you sure you want to logout?</ThemedText>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={() => logoutConfirmationModalRef.current?.dismiss()}
                        >
                            <ThemedText style={styles.cancelButtonText}>Cancel</ThemedText>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.logoutButton]}
                            onPress={handleConfirmLogout}
                        >
                            <ThemedText style={styles.logoutButtonText}>Logout</ThemedText>
                        </TouchableOpacity>
                    </View>
                </BottomSheetView>
            </BottomSheetModal>
        </>

    );
});

DashboardMenuModal.displayName = "DashboardMenuModal"
export default DashboardMenuModal;

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    confirmationContainer: {
        padding: 20,
    },
    confirmationTitle: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    button: {
        flex: 1,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    cancelButton: {
        backgroundColor: '#f0f0f0',
    },
    logoutButton: {
        backgroundColor: '#ff4444',
    },
    cancelButtonText: {
        color: '#333',
    },
    logoutButtonText: {
        color: 'white',
    },
});