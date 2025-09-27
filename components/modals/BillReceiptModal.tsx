import React, {forwardRef, useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {BottomSheetBackdrop, BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import {ThemedText} from "@/components/ThemedText";
import {Entypo} from "@expo/vector-icons";
import {
    BottomSheetDefaultBackdropProps
} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import {useRouter} from "expo-router";

export type DashboardMenuModalHandle = {
    open: () => void;
    close: () => void;
};

const BillReceiptModal = forwardRef<DashboardMenuModalHandle>((props, ref) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

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


    return (

        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={["45%"]}
            backdropComponent={renderBackdrop}
        >
            <BottomSheetView>
                <ThemedText>{}</ThemedText>
            </BottomSheetView>
        </BottomSheetModal>


    );
});

BillReceiptModal.displayName = "BillReceiptModal"
export default BillReceiptModal;

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