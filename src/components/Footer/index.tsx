import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FiBox, FiHeart, FiSun, FiMoon } from 'react-icons/fi';
import { FaWhatsapp, FaDiscord, FaGithub } from 'react-icons/fa';

import ToggleThemeContext from '../../utils/toggleThemeContext';

import {
  Container,
  Title,
  BtnGroup,
  ColorModeBtn,
  LinkBtn,
} from './styles';

const Footer: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <>
      <Container>
        <div className="owner">
          <span>
            Criado com&nbsp;
            <FiHeart size={18} color='#ff0000' />&nbsp;
            por&nbsp;
            <a href='www.goole.com' target='_blank'>Miguel Ângelo</a>
          </span>
          <ColorModeBtn onClick={toggleTheme} themeName={title}>
            <span className="light">
              <FiMoon size={18} />&nbsp;
              Apagar as luzes
            </span>
            <span className="dark">
              <FiSun size={18} />&nbsp;
              Acender as luzes
            </span>
          </ColorModeBtn>
        </div>
        <Title><FiBox size={30} /> MCFarms</Title>

        <BtnGroup>
          <LinkBtn><FaDiscord size={18} /></LinkBtn>
          <LinkBtn><FaWhatsapp size={18} /></LinkBtn>
          <LinkBtn><FaGithub size={18} /></LinkBtn>
        </BtnGroup>
      </Container>
    </>
  );
};

export default Footer;