import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Nav } from "components";
import { Home, Discover, Search, Movie } from "screens";

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
