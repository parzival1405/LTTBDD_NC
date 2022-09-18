import React from 'react'
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Facebook from "../icons/facebook.png";
import Google from "../icons/google.png";
import TextField from "../components/TextField";
import CustomButton from "../components/CustomButton";
// import Zalo from "../icons/zalo";
import Eye from "../icons/eye.png";
function Login() {
  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>LOGIN</Text>
            <TextField style={styles.textField} placeholder={'Email'}/>
            <TextField style={styles.textField} placeholder={'Password'} RightContent={() => (
                <TouchableOpacity>
                    <Eye />
                </TouchableOpacity>
            )}/>
            <CustomButton style={styles.buttonLogin} title={'LOGIN'} styleTitle={{color: '#fff'}}/>
            <Text style={styles.text}>When you agree to terms and conditions</Text>
            <Text style={{
                ...styles.link,
                ...styles.text,
            }} >Forgot your password?</Text>
            <Text style={styles.text}>Or login with</Text>
            <View style={styles.groupSocialContainer}>
                <CustomButton style={{
                    backgroundColor: '#25479B',
                    ...styles.buttonSocial
                }} LeftContent={Facebook}/>
                <CustomButton style={{
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: '#0680F1',
                    ...styles.buttonSocial,
                }} LeftContent={Google}/>
            </View>
        </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#31AA5230',
    },
    contentContainer: {
        flexGrow: 1,
        alignItems: "center",
        marginHorizontal: 16,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 50,
    },
    textField: {
        width: '100%',
        marginVertical: 15,
    },
    buttonLogin: {
        width: '100%',
        marginTop: 50,
        backgroundColor: '#E53935',
        marginBottom: 10,
    },
    text: {
        marginVertical: 10,
    },
    link: {
        color: '#5D25FA',
    },
    groupSocialContainer: {
        flexDirection: "row",
        width: '100%',
        marginTop: 50,
    },
    buttonSocial: {
        flex: 1,
    }
});