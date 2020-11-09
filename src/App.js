import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import './App.scss';
import './assets/fonts/SFProDisplay.ttf';

const App = () => (
  <div>
    <Navbar />
    <MainContent />
  </div>
);

export default App;