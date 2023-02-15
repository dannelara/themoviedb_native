import { Text, View } from "react-native";

export const Card = ({ name }) => {
  return (
    <View
      className={`rounded-lg border-2 border-[#D1B000] h-10 m-1 items-center justify-center`}
    >
      <Text className="w-full text-white py-2 px-2">{name}</Text>
    </View>
  );
};
