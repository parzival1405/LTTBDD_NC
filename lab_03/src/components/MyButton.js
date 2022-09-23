import React from "react";
import { Button, Pressable, StyleSheet,Text } from "react-native";
function MyButton({ content, style, onPress, border }) {
  return (
    <Pressable onPress={onPress} style={style ? style : styles.container}>
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }} >{content}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    backgroundColor: "#0A5EB7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  border: {},
});

export default MyButton;
