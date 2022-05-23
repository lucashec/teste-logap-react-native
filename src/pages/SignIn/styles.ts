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
        color: '#fff',
        marginBottom: 30
    },
    signin:{
        fontFamily: 'Heebo-Bold',
        color: '#B22E6F',
        fontSize: 16
    }
});

export const Input = styled.TextInput`
    width: 100%;
    height: 60px;
    margin-top: 5px;
    background-color: rgba(0, 0, 0, 0.32);
    color: #fff;
    font-family: 'Heebo-Ligth';
    padding-top: 30px;
    padding-left: 10px;
    border-radius: 4px;
`;
export const InputBox = styled.View`
    width: 100%;
    height: 70px;
    margin-bottom: 10px;
`;
export const FieldLabel = styled.Text`
    font-family: 'Heebo-Light';
    font-size: 14px;
    color: #fff;
    position: absolute;
    left: 10px;
    top: 6px;
    bottom: 4px;
`;

export const Button = styled.TouchableOpacity`
    width: 250px;
    height: 50px;
    background-color: #fff;
    border-radius: 44px;
    align-self: center;
    justify-content: center;
    margin-top: 100px;
    align-items: center;
`;
