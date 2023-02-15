import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const MovieCard = ({ movie }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="relative h-56 w-40 m-1 rounded-sm"
      onPress={() => {
        navigation.navigate("Movie", {
          id: movie.id,
        });
      }}
    >
      <Image
        className="h-full w-full rounded-sm"
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }}
      ></Image>
      <View className="absolute bottom-0 left-0 h-14 w-full bg-[#0000006c] items-start justify-center">
        <Text className="text-white text-base ml-2">{movie.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
