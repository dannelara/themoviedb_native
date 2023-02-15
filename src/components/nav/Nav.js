import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  FolderIcon,
} from "react-native-heroicons/solid";

export const Nav = ({}) => {
  const navigation = useNavigation();

  return (
    <View className="h-20 bg-dark flex-row items-start justify-center">
      <View className="flex-row h-1/2 flex-1 items-center justify-between mx-5 mt-1">
        <View className="items-center justify-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="h-full w-full items-center justify-center"
          >
            <HomeIcon size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View className="items-center justify-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            className="h-full w-full items-center justify-center"
          >
            <MagnifyingGlassIcon size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View className="items-center justify-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("Discover")}
            className="h-full w-full items-center justify-center"
          >
            <FolderIcon size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
