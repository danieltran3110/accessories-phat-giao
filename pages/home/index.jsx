import SlideIntro from '../../components/PageHome/BeginSlide/componentSwiper';
import NavBar from '../../components/PageHome/NavBar/componentNavBar';
import { useEffect } from 'react';
import { fadeInUp, fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import Proverb from '../../components/PageHome/Proverb/componentsProverb';
import Welcome from '../../components/PageHome/Welcome/componentWelcome';
import Mend from '../../components/PageHome/Mend/componentMend';
import Event from '../../components/PageHome/Event/componentEvent';
import Feature from '../../components/PageHome/Feature/componentFeature';
import Vision from '../../components/PageHome/Vision/componentVison';
import Dharma from '../../components/PageHome/Dharma/componentDharma';
import stylesGlobal from '../../assets/scss/global.module.scss';
import Zalo from '../../components/Zalo/zalo';
import ScrollButton from '../../components/ScrollButton/componentScrollButton';
import Script from 'next/script';

export default function HomePage() {

  const styles = StyleSheet.create({
    fadeInUp: {
      visibility: 'visible',
      animationName: fadeInUp,
      animationDuration: '0.5s',
      scrollingBehavior: 'smooth',
    },
    fadeIn: {
      visibility: 'visible',
      animationName: fadeIn,
      animationDuration: '0.5s',
      scrollingBehavior: 'smooth',
    },
  });

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains(stylesGlobal.section)) {
              entry.target.classList.add(css(styles.fadeInUp));
              if (entry.target.classList.contains(stylesGlobal.section2)) {
                entry.target.classList.add(css(styles.fadeIn));
              }
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
      },
    );
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  });

  return (
    <div className='homePage'>
      <SlideIntro />
      <NavBar />
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
