import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export const Home = ({}) => {
  return (
    <View className="">
      <Text className="text-red-500">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};
