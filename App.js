import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";

import { Home } from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Nav } from "./src/components/Nav";
import { Discover } from "./src/screens/Discover";
import { Search } from "./src/screens/Search";
import { Movie } from "./src/screens/Movie";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: "Search" }}
        />
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={{ title: "Discover" }}
        />
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{ title: "Movie" }}
        />
      </Stack.Navigator>
      <Nav />
    </NavigationContainer>
  );
}
