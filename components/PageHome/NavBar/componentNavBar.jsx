import React, { useEffect, useState } from 'react';
import styles from '../../../styles/PageHome/NavBar/componentNavBar.module.scss';
import NavBarLeftSide from './components/navBarLeftSide';
import NavBarRightSide from './components/navBarRightSide';
import icon from '../../../assets/images/logo1_retina.png';
import Image from 'next/image';

const NavBar = () => {

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    let sticky = navbar.offsetTop;

    function FuncSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add(styles.sticky);
      } else {
        navbar.classList.remove(styles.sticky);
      }
    }

    window.onscroll = function() {
      FuncSticky();
    };
  });

  return (
    <nav role='navigation' className={styles.menu} id='navbar'>
      <label htmlFor='menu'>
        <figure className={styles.symbolNavbar}><Image src={icon} alt='Symbol' /></figure>
        <i className={`${'fas fa-search '} ${styles.search} ${styles.icon}`} />
        <i className={`${'fa fa-bars '} ${styles.icon}`} />
      </label>
      <input type='checkbox' id='menu' />
      <NavBarLeftSide />
      <NavBarRightSide />
    </nav>
  );
};

export default NavBar;
