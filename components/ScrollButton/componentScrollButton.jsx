import React, { useEffect, useState } from 'react';
import styles from '../../styles/ScrollButton/componentScrollButton.module.scss';

const ScrollButton = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

  });


  return (
    <i className={`${'fa fa-arrow-up'}  ${styles.btnScrollUp}`} onClick={scrollToTop}
       style={{ display: visible ? 'inline' : 'none' }} />
  );
};

export default ScrollButton;