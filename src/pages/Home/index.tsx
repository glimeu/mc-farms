import React from 'react';

import Header from '../../components/Header/index';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        Hi
      </Container>
    </>
  );
}

export default Home;