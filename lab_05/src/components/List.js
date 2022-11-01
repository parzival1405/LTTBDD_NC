import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
function List({ ListWork, setListWork }) {
  const handleClear = () => {
    setListWork([]);
  };
  return (
    <>
      <View style={styles.container}>
        {/* {ListWork.map((text,index) => 
        <Text style={styles.text} key={index}>{text}</Text>
      )} */}
        <FlatList
          horizontal={false}
          data={ListWork}
          renderItem={({ item, index }) => {
            return <Text style={styles.text}>{item}</Text>;
          }}
        ></FlatList>
      </View>
      <View>
        <Button title="clear" onPress={handleClear} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    margin: 20,
    height: 500,
  },
  text: {
    color: "blue",
    fontSize: 30,
  },
});

export default List;
