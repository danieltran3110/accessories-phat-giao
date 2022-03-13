import React, { useState } from 'react';
import styles from '../../../styles/PageHome/NavBar/componentNavBar.module.scss';
import { dataNavbar } from '../../../utils/data-config';
import NavBarLeftSide from './components/navBarLeftSide';
import NavBarRightSide from './components/navBarRightSide';
import icon from '../../../assets/images/logo1_retina.png';

const NavBar = () => {
  return (
    // <div className={styles.navigationBar}>
    //   <div className={styles.leftSide}>
    //     <NavBarLeftSide />
    //   </div>
    //   <div className={styles.rightSide}>
    //     <NavBarRightSide/>
    //   </div>
    // </div>
    <nav role='navigation' className={styles.menu}>
      <label htmlFor='menu'>
        <figure className={styles.symbolNavbar}><img src={icon.src} alt='Symbol' /></figure>
        <i className={'fas fa-search ' + styles.search} />
        <i className='fa fa-bars' />
      </label>
      <input type='checkbox' id='menu' />
      {/*<label htmlFor='symbol'></label>*/}
      {/*<input type='checkbox' id='symbol' />*/}
      {/*<ul>*/}
      {/*  <li><a href='#'>Home</a></li>*/}
      {/*  <li className={styles.menuHasDropDown}>*/}
      {/*    <a href='#'>About&nbsp;*/}
      {/*      <label title='toggle menu' htmlFor='about'>*/}
      {/*        <i className='fa fa-caret-down' />*/}
      {/*      </label>*/}
      {/*    </a>*/}
      {/*    <input type='checkbox' id='about' />*/}
      {/*    <ul className={styles.menuDropdown}>*/}
      {/*      <li><a href=''>History</a></li>*/}
      {/*      <li><a href=''>Mission</a></li>*/}
      {/*      <li className={`${styles.menuHasDropDown} ${styles.menuHasFlyOut}`}>*/}
      {/*        <a href=''>Services&nbsp;*/}
      {/*          <label title='toggle menu' htmlFor='services'>*/}
      {/*            <i className={'fa fa-caret-down' + ' ' + styles.menuDownIcon} />*/}
      {/*            <i className={'fa fa-caret-right' + ' ' + styles.menuRightIcon} />*/}
      {/*          </label>*/}
      {/*        </a>*/}
      {/*        <input type='checkbox' id='services' />*/}
      {/*        <ul className={styles.menuDropdown}>*/}
      {/*          <li><a href=''>Service 1</a></li>*/}
      {/*          <li><a href=''>Service 2</a></li>*/}
      {/*          <li><a href=''>Service 3</a></li>*/}
      {/*        </ul>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </li>*/}
      {/*  <li><a href='#'>Clients</a></li>*/}
      {/*  <li><a href='#'>Contact Us</a></li>*/}
      {/*</ul>*/}
      <NavBarLeftSide />
      <NavBarRightSide />
    </nav>
  );
};

export default NavBar;
