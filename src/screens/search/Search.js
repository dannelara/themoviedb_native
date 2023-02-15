import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, ScrollView, TextInput } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import * as API from "fetch/fetch";
import { MovieCard } from "components";

export const Search = ({}) => {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (!query) {
        setMovies([]);
        return;
      }

      try {
        const { results } = await API.fetch_data(
          "/search/movie",
          `&query=${query.toString()}`
        );

        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);
  return (
    <SafeAreaView className="flex-1 bg-dark_light">
      <ScrollView>
        <View className="h-10 items-center justify-center mt-5 ">
          <View className="h-full flex-row w-4/5 bg-white items-center rounded-md p-2">
            <MagnifyingGlassIcon size={25} color="gray" />
            <TextInput
              className="h-full w-full"
              placeholder="Search movie title"
              onChangeText={(text) => setQuery(text)}
            ></TextInput>
          </View>
        </View>

        <View className="mt-5 mb-5 flex-row flex-wrap items-center justify-center">
          {movies.map((movie, key) => (
            <MovieCard key={key} movie={movie} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
