import SlideIntro from '../../components/PageHome/BeginSlide/componentSwiper';
import React from 'react';
import Proverb from '../../components/PageHome/Proverb/componentsProverb';
import Welcome from '../../components/PageHome/Welcome/componentWelcome';
import Mend from '../../components/PageHome/Mend/componentMend';
import Event from '../../components/PageHome/Event/componentEvent';
import Feature from '../../components/PageHome/Feature/componentFeature';
import Vision from '../../components/PageHome/Vision/componentVison';
import Dharma from '../../components/PageHome/Dharma/componentDharma';
import Zalo from '../../components/Zalo/zalo';
import ScrollButton from '../../components/ScrollButton/componentScrollButton';
import Script from 'next/script';
import Navbar from '../../components/NavBar/componentNavBar';

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
