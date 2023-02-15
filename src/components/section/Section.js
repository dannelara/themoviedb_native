import React from "react";
import { ScrollView, Text, View } from "react-native";

export const Section = ({ title, children }) => {
  return (
    <View className="h-fit mx-2 pt-5">
      <Text className="text-2xl text-white font-bold">{title}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
};
