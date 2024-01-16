import React from 'react';
import './MainAbout.css';
import { ChooseLanguage } from '../Language/ChooseLanguage';
import { Icons } from './Icons/Icons';
import { Nav } from '../Nav/Nav';
import { AboutMe } from '../AllInfo/AboutMe';

export const MainAbout = () => {
  return (
    <div className="Place">
            <Nav/>

        <img className="photo" src={process.env.PUBLIC_URL + '/images/cv.jpg'} alt="CV" />
        {/* <Icons/> */}
        <section className='text'>
            <h1 className="name">Mateusz Świderski</h1>

            <p>Obecnie:</p>
            <p>Poszukuję pracy V</p>
            <p>Gotowość do przeprowadzki</p>
            <p>Praca na pełen etat</p>
        </section>
              {/* <AboutMe/> */}

        <ChooseLanguage/>
    </div>
  );
}

