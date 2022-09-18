// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import WelCome from "./src/screens/Welcome";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator ();
  return (
    // <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelCome} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    // </SafeAreaProvider>
  );
}
