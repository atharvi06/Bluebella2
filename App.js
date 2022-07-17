import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/pages/Categories';
import Cart from './components/pages/Cart';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';
import Men from './components/pages/Men';
import Women from './components/pages/Women';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
      </Routes>
    </Router>
  );
}

export default App;
