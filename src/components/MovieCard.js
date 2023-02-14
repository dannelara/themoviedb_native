import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const MovieCard = ({ movie }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="relative h-44 w-32 m-1 rounded-sm"
      onPress={() => {
        navigation.navigate("Movie", {
          id: movie.id,
        });
      }}
    >
      <Text>{movie.title}</Text>
      <Image
        className="absolute h-full w-full rounded-sm"
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }}
      ></Image>
    </TouchableOpacity>
  );
};
