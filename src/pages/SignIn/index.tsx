import React from 'react';
import { Image, Text } from 'react-native';
import Background from '../../assets/background.jpg';

import { 
    LogoWrapper,
    Labels,
    Button,
    ImageBackground,
    Container
} from './styles';
import { useNavigation } from '@react-navigation/native';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
    
  return (
      <>
      <Image source={Background} style={ImageBackground.style}/>
      <Container>
        <LogoWrapper>
          <Text style={Labels.logo}>
            Movies
          </Text>
          <Button onPress={() => {
            navigation.navigate('Home');
          }}>
            <Text style={Labels.signin}>
                Começar
            </Text>
        </Button>
        </LogoWrapper>
      </Container>
        
      </>
  );
}

export default SignIn;