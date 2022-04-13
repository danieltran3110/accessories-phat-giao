import SlideIntro from '../../components/PageHome/BeginSlide/BeginSlide';
import React from 'react';
import Proverb from '../../components/PageHome/Proverb/Proverb';
import Welcome from '../../components/PageHome/Welcome/Welcome';
import Mend from '../../components/PageHome/Mend/Mend';
import Event from '../../components/PageHome/Event/Event';
import Feature from '../../components/PageHome/Feature/Feature';
import Vision from '../../components/PageHome/Vision/Vison';
import Dharma from '../../components/PageHome/Dharma/Dharma';
import Zalo from '../../components/Zalo/zalo';
import ScrollButton from '../../components/ScrollUpButton/ScrollUpButton';
import Script from 'next/script';
import Navbar from '../../components/NavBar/NavBar';

export default function HomePage() {

  return (
    <div className='homePage'>
      <SlideIntro />
      <Navbar hideLogo={true} />
      <Proverb />
      <Welcome />
      <Mend />
      <Event />
      <Feature />
      <Vision />
      <Dharma />
      <Zalo />
      <ScrollButton />
      <Script  src='https://kit.fontawesome.com/618a331a9e.js'
               crossOrigin='anonymous' />
    </div>
  );
}
