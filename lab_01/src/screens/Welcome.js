import React from "react";
// import {StatusBar} from "expo-status-bar";
import {LinearGradient} from "expo-linear-gradient";
import Circle from "../icons/circle.png";
import {StyleSheet, Text, View,Image} from "react-native";
import CustomButton from "../components/CustomButton";

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <StatusBar/> */}
            <LinearGradient
                colors={['#C4C4C400', '#28F7AC']}
                style={styles.background}>
                <Image source ={Circle}></Image>
                <Text style={styles.title}>GROW{'\n'}YOUR BUSINESS</Text>
                <Text style={styles.subTitle}>We will help you to grow your business using online server</Text>
                <View style={styles.groupButtonContainer}>
                    <CustomButton title={'LOGIN'} onPress={() => {
                        navigation.navigate('Login')
                    }} />
                    <CustomButton title={'SIGN UP'} onPress={() => {
                        navigation.navigate('Register')
                        // test
                    }} />
                </View>
                <Text style={styles.textQuestion}>HOW WE WORK?</Text>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        marginVertical: 60,
        textAlign: "center",
    },
    subTitle: {
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
        marginBottom: 50,
    },
    groupButtonContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-around",
        marginBottom: 40,
    },
    textQuestion: {
        fontSize: 21,
        fontWeight: "bold",
    }
});

export default WelcomeScreen;