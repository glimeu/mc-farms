import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;

  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);

  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const BoxTitle = styled.h3`
  font-size: 32px;
  font-family: Ubuntu, sans-serif;
  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 30px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  margin-bottom: 15px;
`;

export const InputLabel = styled.span`
  font-size: 18px;
  margin-bottom: 3px;

  display: flex;
  align-items: center;

  & > svg {
    margin-right: 3px;
  }
`;

export const Input = styled.input`
  background: none;
  border: solid 1px ${({ theme }) => theme.title === 'light' ? '#c7c7c7' : '#4d4d4d'};
  border-radius: 5px;

  width: 100%;
  margin-right: 5px;
  padding: 7px;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};

  transition: 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonGroup = styled.div`
  margin: 10px 0;
`;

export const StyledButton = styled(Button)`
  font-size: 16px;

  &:last-child {
    margin-left: 10px;
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 3px;
  margin-right: auto;

  text-decoration: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecundary};

  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
