import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import {
  Container,
  Box,
  BoxTitle,
  InputGroup,
  InputLabel,
  Input,
  ButtonGroup,
  StyledButton as Button,
  StyledLink as Link,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Box>
        <BoxTitle>Acessar Conta</BoxTitle>
        <InputGroup>
          <InputLabel><FiMail size={18} />Email</InputLabel>
          <Input defaultValue='Hi lorena' type='email'/>
        </InputGroup>
        <InputGroup>
          <InputLabel><FiLock size={18} />Senha</InputLabel>
          <Input defaultValue='Hi lorena' type='password'/>
        </InputGroup>
        <ButtonGroup>
          <Button>Voltar</Button>
          <Button primary>Entrar</Button>
        </ButtonGroup>
        <Link to='/reset-password'>Esqueceu sua senha?</Link>
        <Link to='/register'>Não tem conta ainda?</Link>
      </Box>
    </Container>
  );
}

export default Login;