import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import Lab_3_a from "./src/screens/Lab_3_a";
export default function App() {
  const [book, setBook] = useState({
    price: 141800,
    oldPrice: 141800,
  });
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Lab_3_a book={book} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
