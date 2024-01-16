import React from 'react';
import './MainAbout.css';
import { ChooseLanguage } from '../Language/ChooseLanguage';

export const MainAbout = () => {
  return (
    <div className="Place">
        <img className="photo" src={process.env.PUBLIC_URL + '/images/cv.jpg'} alt="CV" />
        <section className='text'>
            <h1 className="name">Mateusz Świderski</h1>
            <p>Obecnie:</p>
            <p>Poszukuję pracy V</p>
            <p>Gotowość do przeprowadzki</p>
            <p>Praca na pełen etat</p>
        </section>
        <ChooseLanguage/>
    </div>
  );
}

