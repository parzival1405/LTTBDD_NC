import React from "react";
import {StyleSheet, TextInput, View} from "react-native";

const TextField = ({placeholder,style, LeftContent, RightContent} ) => {
    return (
        <View style={{
            ...styles.mainContainer,
            ...style
        }}>
            <View style={styles.leftContent}>
                {/* {LeftContent ? (<LeftContent />): (<View/>)} */}
            </View>
            <TextInput style={styles.textInput} placeholder={placeholder} placeholderTextColor={'#000000'}/>
            <View style={styles.rightContent}>
                {/* {RightContent ? (<RightContent />): (<View />)} */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#C4C4C44D',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textInput: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize: 16,
        flex: 1,
    },
    leftContent: {
        marginLeft: 16,
    },
    rightContent: {
        marginRight: 16,
    }
});

export default TextField;