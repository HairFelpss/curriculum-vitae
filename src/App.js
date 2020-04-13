import React from 'react';
import { Parallax } from 'react-parallax';

import Header from './components/header';
import Home from './components/home';
import Techs from './components/techs';
import Job from './components/jobs';
import KnowMore from './components/know-more';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Parallax
        blur={5}
        bgImage={require('./assets/bg/5.jpg')}
        bgImageAlt='tech'
        strength={200}
      >
        <Header />
        <Home />
        <Techs />
        <Job />
        <KnowMore />
        <Footer />
      </Parallax>
    </div>
  );
};

export default App;
