import React, { useEffect } from 'react';
import styles from '../../styles/PageHome/NavBar/componentNavBar.module.scss';
import icon from '../../assets/images/logo1_retina.png';
import NavBarLeftSide from '../PageHome/NavBar/components/navBarLeftSide';
import NavBarRightSide from '../PageHome/NavBar/components/navBarRightSide';
import Image from 'next/image';
import SearchBox from '../PageHome/NavBar/components/searchBox';

const NavBar = () => {

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    let sticky = navbar.offsetTop;

    function FuncSticky() {
      if ((window.pageYOffset - 1) >= sticky) {
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
      <div className={styles.displayInlineLeft}>
        <figure className={styles.symbolNavbar2}><Image src={icon} alt='Symbol' /></figure>
      </div>
      <NavBarLeftSide />
      <NavBarRightSide />
      {/*<SearchBox />*/}
    </nav>
  );
};

export default NavBar;
