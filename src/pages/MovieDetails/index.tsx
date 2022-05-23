import React from 'react';
import { Image, Text, View } from 'react-native';
import { 
    MovieInfo, 
    BackButton, 
    MovieImage, 
    MovieTitle, 
    Container, 
    DetailsContent, 
    Labels, 
    InfoLabels, 
    InfoContent, 
    MovieReview } 
    from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontIsto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native';

interface MovieDetailsProps{
    route: any;
}

const MovieDetails: React.FC<MovieDetailsProps> = (props) => {
  const {movie, genres} = props.route.params;
  const navigation = useNavigation();

  const splittedDate = movie.release_date.split('-');

  return (
      <Container>
        <BackButton
            onPress={() =>{
                navigation.goBack();
            }}
        >
            <MaterialIcons name='arrow-back' size={28}/>
        </BackButton>
        <DetailsContent>
            <MovieImage>
                <Image source={{
                    uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                }}
                style={{
                    width: '100%',
                    height: 450,
                }}
                />
            </MovieImage>

            <MovieTitle>
                <Text style={Labels.title}>
                    {movie.title}
                </Text>
            </MovieTitle>
            <Text style={Labels.authors}>
                    {genres.map((genre, i, genres)=> {
                        if (i + 1 === genres.length){
                            return `${genre}`
                        }
                        else {
                            return `${genre}, `
                        }
                    })}
            </Text>
            <Text style={Labels.infoSection}>
                INFORMAÇÕES
            </Text>

            <MovieInfo>    
                <InfoLabels>
                    <Text style={Labels.attr}>
                        Lançamento
                    </Text>
                    <Text style={Labels.attr}>
                        Avaliação
                    </Text>
                    <Text style={Labels.attr}>
                        Idioma
                    </Text>
                </InfoLabels>

                <InfoContent>
                    <Text style={Labels.data}>
                        {splittedDate[2]}/
                        {splittedDate[1]}/
                        {splittedDate[0]}   
                        
                    </Text>
                    <Text style={Labels.data}>
                        {movie.vote_average}
                    </Text>
                    <Text style={Labels.data}>
                        {movie.original_language.toUpperCase()}
                    </Text>
                </InfoContent>
            </MovieInfo>
            
            <Text style={Labels.infoSection}>
                SINOPSE
            </Text>
            
            <MovieReview>
                <View style={{
                    width: 30,
                    height: 30,
                    position: 'absolute'
                }}>
                <FontIsto name='quote-a-right' size={22}/>
                </View>
                <Text style={Labels.text}>
                    {"        "}
                    {movie.overview}
                </Text>
            </MovieReview>
        </DetailsContent>
      </Container>
  );
}

export default MovieDetails;