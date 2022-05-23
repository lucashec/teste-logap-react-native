import React from 'react';
import { Image, Text } from 'react-native';
import { 
    MovieContainer,
    MovieImage,
    MovieInfo,
    MovieInfoTitles,
    MoviesLabels
 } from './styles';
interface MovieItemProps{
    imagePath: any,
    movieTitle: string,
    releaseYear: string,
    originalLanguage: string,
    rating: number;
}
const MovieItem: React.FC<MovieItemProps> = ({
    imagePath,
    movieTitle,
    releaseYear,
    originalLanguage,
    rating
}) => {
  
  return (
    <MovieContainer>
    <MovieImage>
        <Image source={{uri: imagePath}}
         style={{
             resizeMode: 'cover',
             flex: 1,
         }}
        />
    </MovieImage>
    <MovieInfo>
        <MovieInfoTitles>
          <Text style={MoviesLabels.title}>
              {movieTitle}
          </Text>
          <Text style={MoviesLabels.author}>
              {releaseYear} | {originalLanguage}
          </Text>
          <Text style={MoviesLabels.detail}>
              {rating}
          </Text>
        </MovieInfoTitles>

    </MovieInfo>
    </MovieContainer>
  );
}

export default MovieItem;