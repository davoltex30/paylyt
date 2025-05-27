import React from 'react';

import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import CustomTextInput from "@/components/inputs/CustomTextInput";
import CustomPasswordInput from "@/components/inputs/CustomPasswordInput";
import {ThemedText} from "@/components/ThemedText";
import {Link} from "expo-router";
import BouncyCheckbox from "react-native-bouncy-checkbox/lib";
import CustomButton from "@/components/CustomButton";

const Register = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#23303B"}/>
            <ThemedText type={"title"} style={{color: 'white', textAlign: "center", marginBottom: 15}}>Create your account</ThemedText>
            <View style={{flexDirection: "column", gap: 10,}}>
                <CustomTextInput placeholder={"Name"}/>
                <CustomTextInput placeholder={"Email"}/>
                <CustomTextInput placeholder={"Phone Number"}/>
                <CustomTextInput placeholder={"CNIC"}/>
                <CustomPasswordInput placeholder={"Password"}/>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <BouncyCheckbox
                        onPress={(isChecked: boolean) => {}}
                        fillColor={"#456EFE"}
                        textComponent={<ThemedText style={{color: 'white', marginLeft: 10}}>I Agree to <ThemedText style={{color: '#456EFE'}}><Text>Terms and Conditions</Text></ThemedText></ThemedText>}
                    />
                </View>
                <CustomButton title={"Sign-Up"} onPress={() => console.log("sign in")}/>
                <ThemedText style={{color: 'white', marginLeft: 10}}>Already have an account? <Link href={"/(auth)/login"} style={{color: '#456EFE'}}><Text>Sign In</Text></Link></ThemedText>
            </View>

        </SafeAreaView>
    );
};

export default Register;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#23303B',
        flexDirection: 'column', justifyContent: "flex-end"
    }
});
