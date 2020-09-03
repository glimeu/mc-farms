import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
// import { FiSun, FiMoon } from 'react-icons/fi';

import ToggleThemeContext from '../../utils/toggleThemeContext';

import { Container } from './styles';

const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);

  console.log(toggleTheme)

  return (
    <Container>
      MC-Farms
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
  );
};

export default Header;