import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity, View, Text } from 'react-native';
import MovieItem from '../../components/MovieItem';
import FeatherIcons from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import { Container, Header, IconWrapper, Labels } from './styles';

interface MovieProps{
    original_language: string;
    id: number,
    title: string, 
    poster_path: string;
    vote_average: number;
    overview: string;
    release_date: string;
    genre_ids: number[];
}
interface GenreProps{
    id: number, 
    name: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<MovieProps[]>();
  const [genres, setGenres] = useState<GenreProps[]>();
  const [loading, setLoading] = useState(Boolean);
  const [page, setPage] = useState(1);
  const navigation = useNavigation();
  
  useEffect(() => {
    if (genres) return;
    getGenres();
  }, []);

  useEffect(() => {
      loadMovies();
  }, [movies]);

  async function getGenres(){
      const response = await axios.get(`
      https://api.themoviedb.org/3/genre/movie/list?api_key=1e327382f1a43afde4b1f7fd987184c7&language=pt-BR
      `);
      setGenres(response.data.genres);
  }
  async function loadMovies(){
      if(loading) return;
      setLoading(true);
      const response = await axios.get(`
      https://api.themoviedb.org/3/movie/top_rated?api_key=1e327382f1a43afde4b1f7fd987184c7&language=pt-BR&page=${page}
      `);
      setMovies(
        !movies 
        ? response.data.results :
        movies?.concat(response.data.results)
    );
    setPage(page + 1);
    setLoading(false);
  }

  function FooterSpinner({load}){
    if(!load) return null;
    return (
        <View>
            <ActivityIndicator size={25} color='#121212' />
        </View>
    )
}

  return (
    <Container>
       <Header>
           <Text style={Labels.title}>
             Filmes mais bem avaliados 
           </Text>
           <IconWrapper>
               <FeatherIcons name='trending-up' size={30}/>
           </IconWrapper>
       </Header>
       <FlatList 
            data={movies}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
            {   
                let releaseDate = item.release_date.split('-');
                let year = releaseDate[0];
                let baseImageUrl = 'https://image.tmdb.org/t/p/w500';
                let itemsGenres : any = [];
                
                for (let genre of item.genre_ids){
                    itemsGenres.push(genres?.find(element => element.id == genre)?.name as string)
                }

                return (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('MovieDetails', {movie: item, genres: itemsGenres});
                    }}
                >
                <MovieItem 
                movieTitle={item.title}
                imagePath={baseImageUrl + item.poster_path}
                releaseYear={year}
                originalLanguage={item.original_language.toUpperCase()}
                rating={item.vote_average}
                />
                </TouchableOpacity>
                )
            }}
            onEndReached={loadMovies}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                <FooterSpinner load={loading}/>
            }
            />
    </Container>
  );
}

export default Home;