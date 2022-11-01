import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Add from "../components/Add";
import List from "../components/List";
function lab_05_gk() {
  const [ListWork, setListWork] = useState([]);

  return (
    <SafeAreaView>
      <Add ListWork={ListWork} setListWork={setListWork} />
      <List ListWork={ListWork} setListWork={setListWork}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default lab_05_gk;
