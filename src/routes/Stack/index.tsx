import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../../pages/SignIn/';
import Home from '../../pages/Home';
import MovieDetails from '../../pages/MovieDetails';

const {Navigator, Screen} = createNativeStackNavigator();

const Stack: React.FC = () => {
  return (
    <Navigator initialRouteName='SignIn' 
    screenOptions={{headerShown: false}}>
         <Screen name="SignIn" component={SignIn}/>
         <Screen name="Home" component={Home}/>
         <Screen name="MovieDetails" component={MovieDetails}/>
    </Navigator>
);
}

export default Stack;