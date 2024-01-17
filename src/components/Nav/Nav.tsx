import React from 'react';
import './Nav.css';
import { ChooseLanguage } from '../Language/ChooseLanguage';


export const Nav = () => {
  return (
    <div className="Nav">
      <h1>CV</h1>
      <h2>O mnie</h2>
      <h2>Portfolio</h2>
      <h2>Umiejętności</h2>
    <button className='button'>Pobierz CV</button>

    </div>
  );
}

