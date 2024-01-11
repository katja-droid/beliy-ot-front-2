import logo from './logo.svg';
import './App.css'
import Home from './components/Home';
import Goods from './components/Goods';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Payments from './components/Payments';
import Payment from './components/Payment';
import {useState, useEffect} from 'react';


const App = () => {
  const tg = window.Telegram.WebApp;

  const divStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/BG.png)`, // Reference the image
    backgroundSize: 'cover', // Cover the entire div with the background image
    backgroundPosition: 'center', // Center the background image
    backgroundRepeat: 'no-repeat', // Do not repeat the background image
  };
  return (
    <div style={divStyle}>
    <Router className="App">
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/goods/:category" element={<Goods/>} />
        <Route path="/payments/:id" element={<Payments/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;