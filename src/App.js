import React from 'react';
import { GlobalStyles } from './App.style';
import Footer from './components/Footer/Footer'
import Routes from './Routes';

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Routes />
      <Footer />
    </>
  )
}

export default App