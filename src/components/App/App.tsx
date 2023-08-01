import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import NavBar from '../NavBar/NavBar';
import HomePage from '../Pages/HomePage/HomePage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import Footer from './Footer/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='MainContent'>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;