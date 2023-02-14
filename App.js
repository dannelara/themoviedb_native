import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Nav } from "./src/components/Nav";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-dark_light">
      <Nav />
      <Home />
    </SafeAreaView>
  );
}
