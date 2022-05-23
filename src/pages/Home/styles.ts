import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #E5E5E5;
`;
export const Labels = StyleSheet.create({
    title: {
     fontFamily: 'Heebo-Bold',
     fontSize: 20,
    }
});
export const IconWrapper = styled.View`
    position: absolute;
    right: 15px;
`;
export const Header = styled.View`
    width: 90%;
    height: 50px;
    flex-direction: row;
    align-self: center;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;