import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Lab_05_gk from "./src/screens/Lab_05_gk";
import { Appbar } from "react-native-paper";
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Appbar.Header>
          <Appbar.BackAction />
          <Appbar.Content style={styles.center} title="Title" subtitle="Subtitle" />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <Lab_05_gk />
      </NavigationContainer>
    </SafeAreaProvider>
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
