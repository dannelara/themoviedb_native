import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { Nav } from "./src/components/Nav";
import { Home } from "./src/screens/Home";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-dark_light pt-5 relative">
      <Nav />
      {/* <View className="mx-2">
        <Home />
      </View> */}
    </SafeAreaView>
  );
}
