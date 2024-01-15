import React from 'react';
import './App.css';
import { MainAbout } from './components/MainAbout/MainAbout';
import { AboutMe } from './components/AllInfo/AboutMe';
import { Nav } from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainAbout/>
      <AboutMe/>
    </div>
  );
}

export default App;
