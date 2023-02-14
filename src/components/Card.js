import { Text, View } from "react-native";

export const Card = ({ name, color }) => {
  return (
    <View
      className={`rounded-lg border-2 ${
        color ? `border-[${color}]` : "border-white"
      } h-10 m-1 items-center justify-center`}
    >
      <Text className="w-full text-white py-2 px-2">{name}</Text>
    </View>
  );
};
