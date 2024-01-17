import React from 'react';
import './MainAbout.css';
import { ChooseLanguage } from '../Language/ChooseLanguage';
import { Icons } from './Icons/Icons';
import { Nav } from '../Nav/Nav';
import { AboutMe } from '../AllInfo/AboutMe';
import { LeftSite } from '../LeftSite/LeftSite';

export const MainAbout = () => {
  return (
    <div className="Place">
            <Nav/>

      <LeftSite/>
              {/* <AboutMe/> */}

        {/* <ChooseLanguage/> */}
    </div>
  );
}

