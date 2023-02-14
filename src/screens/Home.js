import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import * as API from "../fetch/fetch";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Section } from "../components/Section";
import { MovieCard } from "../components/MovieCard";

export const Home = ({}) => {
  const navigation = useNavigation();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const trending = await API.fetch_data("/trending/movie/day");
        const playing = await API.fetch_data("/movie/now_playing");
        const topRated = await API.fetch_data("/movie/top_rated");

        setTrendingMovies(trending.results);
        setNowPlaying(playing.results);
        setTopRatedMovies(topRated.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SafeAreaView className="bg-dark_light">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Section title="Trending">
            {trendingMovies.map((movie, key) => (
              <MovieCard key={key} movie={movie} />
            ))}
          </Section>
          <Section title="Now playing">
            {nowPlaying.map((movie, key) => (
              <MovieCard key={key} movie={movie} />
            ))}
          </Section>
          <Section title="Top rated">
            {topRatedMovies.map((movie, key) => (
              <MovieCard key={key} movie={movie} />
            ))}
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
