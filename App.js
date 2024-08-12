// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Places from './components/Places';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Places />
      <Contact />
    </div>
  );
};

export default App;
