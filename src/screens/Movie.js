import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  StarIcon,
  ArrowLeftIcon,
  CalendarIcon,
} from "react-native-heroicons/solid";
import { Card } from "../components/Card";
// import YouTube from "react-native-youtube";

import * as API from "../fetch/fetch";
export const Movie = ({}) => {
  const navigation = useNavigation();
  const {
    params: { id },
  } = useRoute();

  const [cast, setCast] = useState([]);
  const [movie, setMovie] = useState({});
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    (async () => {
      const { cast } = await API.fetch_data(`/movie/${id}/credits`);
      const movie = await API.fetch_data(`/movie/${id}`);

      setCast(cast);
      setMovie(movie);
    })();
  }, []);
  return (
    // <SafeAreaView className="flex-1 bg-dark_light">
    <ScrollView
      className="bg-dark_light gap-3"
      showsVerticalScrollIndicator={false}
    >
      <View className="relative">
        <View className="h-[500]">
          <ImageBackground
            className=" w-full h-full"
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
            }}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity
          className="absolute top-16 left-5 bg-dark_light p-2 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={22} color="white" />
        </TouchableOpacity>
      </View>

      <View>
        <View className="mx-2 items-start justify-center">
          <View>
            <Text className="text-white text-3xl font-bold">{movie.title}</Text>
          </View>

          <View className="flex-row gap-5 mt-1 mb-1">
            <View className="flex-row ">
              <StarIcon color={"gold"} />
              <Text className="text-white text-lg font-bold">
                {movie.vote_average}
              </Text>
            </View>

            <View className="flex-row">
              <CalendarIcon color={"gold"} />
              <Text className="text-white text-lg font-bold">
                {movie.release_date}
              </Text>
            </View>
          </View>

          <View className="mt-4 mb-4">
            <Text className="text-white">{movie.overview}</Text>
          </View>

          <ScrollView
            contentContainerStyle={{
              paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {movie.genres?.map((genre, key) => (
              <Card key={key} name={genre.name} color="gold" />
            ))}
          </ScrollView>

          <ScrollView
            contentContainerStyle={{
              paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {cast.map((person, key) => (
              <Card key={key} name={person.name} />
            ))}
          </ScrollView>

          <View className="h-56 w-full flex-col mb-2">
            <TouchableOpacity className="mt-2 mb-2">
              <Text className="text-xl text-white font-bold">Trailer</Text>
            </TouchableOpacity>
            <View className="flex-1 w-full bg-dark items-center justify-center">
              <Text className="text-xl text-white">TBD</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
