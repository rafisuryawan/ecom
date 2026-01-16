import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}


export default App
