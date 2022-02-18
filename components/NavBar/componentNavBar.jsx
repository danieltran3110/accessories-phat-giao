import React, { useState } from 'react';
import styles from '../../styles/NavBar/componentNavBar.module.scss';
import { dataNavbar } from '../../utils/data-config';
import NavBarLeftSide from './components/navBarLeftSide';

const NavBar = () => {
  return (
    <div className={styles.navigationBar}>
      <div className={styles.leftSide}>
        <NavBarLeftSide />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.title}>
          <p>
            <i aria-hidden className='fas fa-calendar-alt'></i>
            Calender
          </p>
        </div>
        <div className={styles.title}>
          <p>
            <i aria-hidden className='fa fa-heart'></i>
            Donate
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
