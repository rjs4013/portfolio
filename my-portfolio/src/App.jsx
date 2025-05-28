import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.min.css';

import IntroSection from './components/IntroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import NavBar from './components/NavBar';


function App() {
useEffect(() => {
  new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    normalScrollElements: '.modal-content',
    autoScrolling: true,
    navigation: true,
    scrollingSpeed: 700,
    anchors: ['intro', 'skills', 'projects', 'contact'],
    navigationTooltips: ['Intro', 'Skills', 'Projects', 'Contact'],
    showActiveTooltip: true,
    easingcss3: 'ease-in-out',

    afterLoad: function (origin, destination) {
      const sectionId = destination.anchor + '-content';
      
      const el = document.getElementById(sectionId);
      if (el) {
        el.classList.add('visible');
      }
    },

    onLeave: function (origin, destination) {
      const sectionId = origin.anchor + '-content';
      const el = document.getElementById(sectionId);
      if (el) {
        el.classList.remove('visible');
      }
    }
  });
}, []);

  return (
    <>
    <NavBar />
    <div id="fullpage">
      <div className="section"><IntroSection /></div>
      <div className="section"><SkillsSection /></div>
      <div className="section"><ProjectsSection /></div>
      <div className="section"><ContactSection /></div>
    </div>
    </>
  );
}

export default App;
