import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Store from './store';

function App() {
  return (
    <Store.Provider>
      <ThemeProvider theme={theme}>
        <div>Hello React</div>
      </ThemeProvider>
    </Store.Provider>
  );
}

export default App;
