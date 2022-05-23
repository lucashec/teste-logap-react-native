import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../../pages/SignIn/';
import Home from '../../pages/Home';
import MovieDetails from '../../pages/MovieDetails';
import AsyncStorage from "@react-native-async-storage/async-storage";

const {Navigator, Screen} = createNativeStackNavigator();

const Stack: React.FC = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('token')
    .then((response) => {
      setToken(response ? true : false)
    })
  }, []);
  
  return (
    <Navigator initialRouteName={ token ? 'Home' : 'SignIn'}
    screenOptions={{headerShown: false}}>
         <Screen name="SignIn" component={SignIn}/>
         <Screen name="Home" component={Home}/>
         <Screen name="MovieDetails" component={MovieDetails}/>
    </Navigator>
);
}

export default Stack;