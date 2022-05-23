import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const MovieContainer = styled.View`
    width: 90%;
    height: 160px;
    background: #fff;
    align-self: center;
    border-radius: 4px;
    flex-direction: row;
    margin-bottom: 20px;
`;
export const MovieImage = styled.View`
    height: 160px;
    width: 117px;
`;
export const MovieInfo = styled.View`
    width: 65%;
    height: 90%;
    flex-wrap: wrap;
    align-self: center;
    justify-content: space-between;
    margin-left: 15px;
`;
export const MovieInfoTitles = styled.View`
    width: 100%;
    margin-left: -7px;
    height: 40%;
`;
export const MoviesLabels = StyleSheet.create({
    title:{
        fontFamily: 'Heebo-Bold',
        fontSize: 16,
        color: '#333333',
    },
    author: {
        color: '#AB2680',
        fontFamily: 'Heebo-Regular',
        fontSize: 14
    },
    detail:{
        color: '#999999',
        fontFamily: 'Heebo-Regular',
    }
})
export const MovieInfoDetails = styled.View`
    width: 100%;
    height: 50%;
    justify-content: space-around;
`;