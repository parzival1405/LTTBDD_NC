import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
function Add({ ListWork, setListWork }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.length > 0) {
      setListWork([...ListWork, text]);
      setText("");
    }
  };
  const handleChangeText = (text) => {
    setText(text);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nhap cong viec"
        value={text}
        onChangeText={handleChangeText}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 20,
  },
});

export default Add;
