import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

function CustomButton({title, onPress, style, styleTitle, LeftContent, RightContent} ) {
    return (
        <TouchableOpacity style={{
            ...styles.buttonContainer,
            ...style
        }} onPress={onPress}>
            <View style={styles.leftContent}>
                {LeftContent ? (<LeftContent />): (<View/>)}
            </View>
            {title ? (
                <Text style={{
                    ...styles.buttonTitle,
                    ...styleTitle,
                }}>{title}</Text>
            ) : (<View/>)}
            <View style={styles.RightContent}>
                {RightContent ? (<RightContent />): (<View/>)}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#E3C000',
        paddingHorizontal: 30,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        minWidth:150
    },
    buttonTitle: {
        fontSize: 21,
        fontWeight: "bold",
    }
})

export default CustomButton