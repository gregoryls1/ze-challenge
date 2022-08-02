import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';

const App = () => {
  return (
    <>
      <Header/>
        <Products/>
      <Footer/>
    </>
  )
}

export default App