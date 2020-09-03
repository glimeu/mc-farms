import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePeristedState from './utils/usePersistedState'
import ToggleThemeContext from './utils/toggleThemeContext';

import dark from './styles/themes/Dark';
import light from './styles/themes/Light';
import GlobalStyle from './styles/global';

import Routes from './Routes';

const App: React.FC = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        <GlobalStyle />
        <Routes />
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;