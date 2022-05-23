import React, { useEffect, useState } from 'react';
import { Image, Text } from 'react-native';
import Background from '../../assets/background.jpg';
import {API_KEY} from '@env';

import { 
    LogoWrapper,
    Labels,
    Button,
    ImageBackground,
    Container,
    InputBox,
    Input,
    FieldLabel
} from './styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import env from 'react-native-dotenv';

interface User {
  email: string;
  password: number;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser({
      email: 'teste@mail.com',
      password: 1234
    })  
  }, [])
  
  async function handleSignIn(){  
    if (email != user!.email || password != user!.password){
      return;
    } 
    axios
    .get(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=1e327382f1a43afde4b1f7fd987184c7`)
    .then((response) => {
      AsyncStorage.setItem('token', response.data.guest_session_id);
    });
    navigation.navigate('Home');
  }

  return (
      <>
      <Image source={Background} style={ImageBackground.style}/>
      <Container>
        <LogoWrapper>
          <Text style={Labels.logo}>
            Movies
          </Text>

        <InputBox>
            <FieldLabel>
                Email
            </FieldLabel>
            <Input 
             value={email}
             onChangeText={setEmail}
             autoCapitalize='none'
            />
        </InputBox>

        <InputBox>
            <FieldLabel>
                Senha
            </FieldLabel>
            <Input
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize='none'
            />
        </InputBox>

          <Button onPress={() => {
            handleSignIn();
          }}>
            <Text style={Labels.signin}>
                Entrar
            </Text>
        </Button>
        </LogoWrapper>
      </Container>
        
      </>
  );
}

export default SignIn;