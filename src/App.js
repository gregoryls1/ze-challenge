import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/produtos'  element={<Products/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App