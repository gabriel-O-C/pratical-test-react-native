import React from 'react';
import {
  Header,
  Heading,
  ProfileImage,
  Input,
  Title,
  Container,
} from '../../components';
import { View } from 'react-native';
const Home = () => {
  return (
    <Container>
      <Header>
        <Heading>Bookshelf</Heading>
        <ProfileImage />
      </Header>
      <View>
        <Input />
      </View>
      <Title>Para você</Title>
    </Container>
  );
};

export default Home;
