import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from 'index.css'
import { Navigation } from 'components';
import theme from 'utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='App'>
      <Navigation items={[]}/>
      </div>
    </ThemeProvider>

  );
} 
export default App;
