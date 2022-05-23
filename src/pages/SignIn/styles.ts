import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";

export const ImageBackground = StyleSheet.create({
   style:{
    position: 'absolute',
    left: 0,
    top:0,
    width: Dimensions.get('window').width,
    height: '100%',
    resizeMode: 'cover'
   } 
});

export const Container = styled.View`
    flex: 1;
    justify-content: center;
`

export const LogoWrapper = styled.View`
    width: 80%;
    height: 300px;
    align-self: center;
    justify-self: center;
`;
export const Labels = StyleSheet.create({
    logo: {
        fontFamily: 'Heebo-ExtraBold',
        fontSize: 45,
        alignSelf: 'center',
        color: '#fff'
    },
    signin:{
        fontFamily: 'Heebo-Bold',
        color: '#B22E6F',
        fontSize: 16
    }
});

export const Button = styled.TouchableOpacity`
    width: 250px;
    height: 50px;
    background-color: #fff;
    border-radius: 44px;
    align-self: center;
    margin-top: 350px;
    justify-content: center;
    align-items: center;
`;
