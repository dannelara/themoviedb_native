import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as API from "fetch/fetch";
import { Card } from "components";
import { MovieCard } from "components";
export const Discover = ({}) => {
  const navigation = useNavigation();
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleGenreSelected = (id) => {
    const url = "/discover/movie";
    const query = `&with_genres=${id}`;
    try {
      (async () => {
        const { results } = await API.fetch_data(url, query);
        setMovies(results);
      })();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { genres } = await API.fetch_data("/genre/movie/list");
        handleGenreSelected(genres[0].id);
        setGenres(genres);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-dark_light">
      <ScrollView>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 mx-2"
        >
          {genres.map((genre, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => handleGenreSelected(genre.id)}
            >
              <Card name={genre.name} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View className="mt-5 mb-5 flex-row flex-wrap items-center justify-center">
          {movies.map((movie, key) => (
            <MovieCard key={key} movie={movie} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
