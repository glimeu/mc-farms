import React from 'react';

import notFound from '../../assets/NotFound.svg';

import { Container } from './styles';
import Button from '../../components/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const NotFound: React.FC = () => {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <Container>
      <img src={notFound} alt="Page not found" />
      <h3>Página não encontrada...</h3>
      <Button onClick={goBack}><FiArrowLeft size={20} />Voltar</Button>
    </Container>
  );
}

export default NotFound;