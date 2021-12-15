import React from 'react';
import {
  Header,
  Heading,
  ProfileImage,
  Input,
  Title,
  Container,
} from '../../components';
const Home = () => {
  return (
    <Container>
      <Header>
        <Heading>Bookshelf</Heading>
        <ProfileImage />
      </Header>
      <Input />
      <Title>Para você</Title>
    </Container>
  );
};

export default Home;
