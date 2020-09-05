import styled, { DefaultTheme, keyframes } from 'styled-components';

interface BtnProps {
  primary?: boolean;
  theme: DefaultTheme;
}

interface SearchBoxProps {
  outAnimation: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 40px;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 28px;
  font-weight: 600;
  font-family: Ubuntu, sans-serif;

  display: flex;
  align-items: center;

  user-select: none;
`;

export const NavGroup = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  list-style: none;

  margin: 0 10px;
  padding: 5px;

  cursor: pointer;
`;

export const NavTitle = styled.span`
  font-size: 20px;
  font-weight: 400;

  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary}
  }
`;

export const BtnGroup = styled.div`
`;

export const Button = styled.button`
  background-color: ${({ primary, theme }: BtnProps) => primary ? theme.colors.primary : 'transparent'};
  color: ${({ primary, theme }: BtnProps) => primary ? '#FFF' : theme.colors.primary};

  font-weight: 600;
  font-size: 14px;

  border: solid 1px ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  padding: 7px;
  margin: 5px;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secundary};
    color: #FFF;
  }
`;

const SearchAnimationIn = keyframes`
  from {
    width: 38px;
  }
  to {
    width: 214px;
  }
`;

const SearchAnimationOut = keyframes`
  from {
    width: 214px;
  }
  to {
    width: 38px;
  }
`;

export const SearchItem = styled(NavItem)`
  margin: 0;
  padding: 0;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  border-radius: 5px;

  &.open {
    border: solid 1px ${({ theme }) => theme.colors.primary};
    animation: ${({ outAnimation }: SearchBoxProps) => outAnimation ? SearchAnimationOut : SearchAnimationIn} 0.2s;
  }
`;

export const Search = styled.input`
  background: none;
  border: none;

  display: none;
  width: 100%;
  max-width: 170px;
  margin-right: 5px;

  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};

  &.open {
    display: initial;
  }
`;

export const SearchBtn = styled(Button)`
  border-radius: 100%;
  min-width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;

  &.open {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

export const Spacer = styled.div`
  height: 60px;
  width: 100%;
`;
