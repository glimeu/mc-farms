import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FiBox } from 'react-icons/fi';

import ToggleThemeContext from '../../utils/toggleThemeContext';

import {
  Container,
  Title,
  NavGroup,
  NavItem,
  NavTitle,
  BtnGroup,
  Button,
  Spacer,
} from './styles';

interface SearchState {
  isOpen: boolean;
  value: string;
  outAnimation: boolean;
}

const Footer: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);

  console.log(window.innerWidth)

  return (
    <>
      <Container>
        <Title><FiBox size={30} /> MCFarms</Title>

        <BtnGroup>
          <Button>Whats</Button>
          <Button>Face</Button>
        </BtnGroup>

        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={50}
          handleDiameter={20}
          offColor={colors.secundary}
          onColor={colors.secundary}
        />
      </Container>
    </>
  );
};

export default Footer;