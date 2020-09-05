import React from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

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

const Register: React.FC = () => {
  return (
    <Container>
      <Box>
        <BoxTitle>Criar Conta</BoxTitle>
        <InputGroup>
          <InputLabel><FiUser size={18} />Nome de usuário</InputLabel>
          <Input defaultValue='Hi lorena' type='text'/>
        </InputGroup>
        <InputGroup>
          <InputLabel><FiMail size={18} />Email</InputLabel>
          <Input defaultValue='Hi lorena' type='email'/>
        </InputGroup>
        <InputGroup>
          <InputLabel><FiLock size={18} />Senha</InputLabel>
          <Input defaultValue='Hi lorena' type='password'/>
        </InputGroup>
        <InputGroup>
          <InputLabel><FiLock size={18} />Repita a Senha</InputLabel>
          <Input defaultValue='Hi lorena' type='password'/>
        </InputGroup>
        <ButtonGroup>
          <Button>Voltar</Button>
          <Button primary>Criar</Button>
        </ButtonGroup>
        <Link to='/login'>Já tem conta?</Link>
      </Box>
    </Container>
  );
}

export default Register;