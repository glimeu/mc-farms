import React, { useState, useRef } from 'react';
import { FiBox, FiSearch } from 'react-icons/fi';

import {
  Container,
  Title,
  NavGroup,
  NavItem,
  NavTitle,
  BtnGroup,
  Button,
  SearchItem,
  SearchBox,
  Search,
  SearchBtn,
  Spacer,
} from './styles';

interface SearchState {
  isOpen: boolean;
  value: string;
  outAnimation: boolean;
}

const Header: React.FC = () => {
  const [searchState, setSearchState] = useState<SearchState>({ isOpen: false, value: '', outAnimation: false });
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchBtnRef = useRef<HTMLButtonElement>(null);

  function handleSearch() {
    if (searchState.isOpen) {
      console.log(searchState);
    } else {
      setSearchState({ ...searchState, isOpen: true });
      setTimeout(() => {
        searchInputRef.current!.focus();
      }, 100);
    }
  }

  return (
    <>
      <Container>
        <Title><FiBox size={30} /> MCFarms</Title>
        <NavGroup>
          <NavItem>
            <NavTitle>Home</NavTitle>
          </NavItem>
          <NavItem>
            <NavTitle>Recentes</NavTitle>
          </NavItem>
          <NavItem>
            <NavTitle>Enviar</NavTitle>
          </NavItem>
          <NavItem>
            <NavTitle>Ajudar</NavTitle>
          </NavItem>
          <SearchItem>
            <SearchBox
              className={searchState.isOpen ? ' open' : ''}
              outAnimation={searchState.outAnimation}
            >
              <Search
                ref={searchInputRef}
                type='text'
                value={searchState.value}
                className={searchState.isOpen ? ' open' : ''}
                onChange={(e) => setSearchState({ ...searchState, value: e.target.value })}
                onFocus={() => { if (!searchState.isOpen) setSearchState({ ...searchState, isOpen: true }) }}
                onBlur={(e) => {
                  if (searchState.value === '' && searchBtnRef.current !== e.relatedTarget) {
                    setSearchState({ ...searchState, isOpen: true, outAnimation: true });
                    setTimeout(() => {
                      setSearchState({ ...searchState, isOpen: false, outAnimation: false });
                    }, 190);
                  };
                }}
                placeholder='Pesquisar farms'
              />
              <SearchBtn
                ref={searchBtnRef}
                className={searchState.isOpen ? ' open' : ''}
                onClick={handleSearch}>
                <FiSearch size={18} />
              </SearchBtn>
            </SearchBox>
          </SearchItem>
        </NavGroup>

        <BtnGroup>
          <Button>Entrar</Button>
          <Button primary>Registrar</Button>
        </BtnGroup>

      </Container>
      <Spacer />
    </>
  );
};

export default Header;