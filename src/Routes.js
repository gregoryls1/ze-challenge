import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'

export default () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='produtos' element={<Products />} />
  </Routes>
)