import '../styles/globals.css';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn, fadeInUp } from 'react-animations';
import { useEffect } from 'react';
import stylesGlobal from '../assets/scss/global.module.scss';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const styles = StyleSheet.create({
    fadeInUp: {
      visibility: 'visible',
      animationName: fadeInUp,
      animationDuration: '0.8s',
      scrollingBehavior: 'smooth',
    },
    fadeIn: {
      visibility: 'visible',
      animationName: fadeIn,
      animationDuration: '0.8s',
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
        threshold: 0.15,
      }
    );
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  });

  return (
    <>
      <Script
        src='https://kit.fontawesome.com/618a331a9e.js'
        crossOrigin='anonymous'
      />
      {/*<Script src='https://identity.netlify.com/v1/netlify-identity-widget.js'/>*/}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
