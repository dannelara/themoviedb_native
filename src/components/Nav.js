import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export const Nav = ({}) => {
  const [menuActive, setMenuActive] = useState(true);
  return (
    <View className="h-16 flex-cols">
      <View className="flex-1 flex-row">
        <View className="flex-1">
          <Text className="text-white text-lg font-bold">Movies</Text>
        </View>
        <View>
          <Text className="text-white text-lg font-bold">M</Text>
        </View>
      </View>
      <View className="flex-1">
        <TextInput
          placeholder="Search movie titles"
          className="bg-white rounded-full  p-2"
        ></TextInput>
      </View>
      {/**Menu */}
      {menuActive && (
        <View className="absolute top-0 bottom-0 left-0 right-0 bg-dark">
          <View>
            <Text className="text-white text-lg font-bold">Md</Text>
          </View>
        </View>
      )}
    </View>
  );
};
