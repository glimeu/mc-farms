import React from 'react';

import development from '../../assets/Development.svg';

import { Container } from './styles';
import Button from '../../components/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const Development: React.FC = () => {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <Container>
      <img src={development} alt="Under contruction" />
      <h3>Página em desenvolvimento!</h3>
      <Button onClick={goBack}><FiArrowLeft size={20} />Voltar</Button>
    </Container>
  );
}

export default Development;