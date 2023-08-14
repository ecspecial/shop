import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from '../NavBar/NavBar';
import HomePage from '../Pages/HomePage/HomePage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import Footer from './Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  );
}

export default App;