import styled, { DefaultTheme } from 'styled-components';

interface BtnProps {
  primary?: boolean;
  theme: DefaultTheme;
}

interface ColorModeProps {
  themeName: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  padding: 0 40px;
  position: absolute;
  bottom: 0;

  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.25);

  div.owner {
    & > span {
      color: ${({ theme }) => theme.colors.textSecundary};
      font-size: 16px;
      display: flex;
      align-items: center;

      & > a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
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
  display: flex;
  flex-direction: row;

  & > button:last-child {
    margin-right: 0;
  }
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

export const ColorModeBtn = styled(Button)`
  margin: 0;
  margin-top: 10px;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > span.light {
    display: ${({ themeName }: ColorModeProps) => themeName === 'light' ? 'flex' : 'none'};
  }

  & > span.dark {
    display: ${({ themeName }: ColorModeProps) => themeName === 'dark' ? 'flex' : 'none'};
  }
`;

export const LinkBtn = styled(Button)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spacer = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 40px;
`;
