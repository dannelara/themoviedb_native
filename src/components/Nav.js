import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon, HomeIcon } from "react-native-heroicons/solid";

export const Nav = ({}) => {
  const navigation = useNavigation();

  return (
    <View className="h-20 bg-dark flex-row items-start justify-center">
      <View className="flex-row h-1/2 flex-1 items-center justify-between mx-5 mt-1">
        <View className="flex items-center justify-center">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <HomeIcon size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex items-center justify-center">
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex items-center justify-center">
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <MagnifyingGlassIcon size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
