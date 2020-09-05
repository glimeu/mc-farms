import styled, { DefaultTheme } from 'styled-components';

interface BtnProps {
  primary?: boolean;
  theme: DefaultTheme;
}

export const StyledButton = styled.button`
  background-color: ${({ primary, theme }: BtnProps) => primary ? theme.colors.primary : 'transparent'};
  color: ${({ primary, theme }: BtnProps) => primary ? '#FFF' : theme.colors.primary};

  font-weight: 600;
  font-size: 14px;

  border: solid 1px ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  padding: 7px;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secundary};
    color: #FFF;
  }
`;
