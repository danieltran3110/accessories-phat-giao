import React, { useEffect, useState } from 'react';
import icon from '../../assets/images/logo1_retina.png';
import icon2 from '../../assets/images/iconNarrow.jpg';
import NavBarRightSide from '../PageHome/NavBar/components/navBarRightSide';
import Image from 'next/image';
import Link from 'next/link';
import styles from './componentNavBar.module.scss';
import { navigationData } from '../../utils/data-config';
import Submenu from './component/Submenu/Submenu';
import SocialIcon from './component/SocialIcon/SocialIcon';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn } from 'react-animations';
import BoxSearch from './component/BoxSearch/BoxSearch';

const classes = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
  },
});

const NavBar = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  // const [showing, setShowing] = useState(false);
  //
  const cancelBox = () => {
    setOpenSearch(false);
  };
  //
  // const handleShow = () => {
  //   setShowing(true);
  // };
  const [top, setTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset === 0) {
        setTop(true);
      } else setTop(false);
    });
  }, [top]);

  return (
    <div
      className={`${styles.navigation} ${!top && styles.nonTop}`}
    >
      <div className='container'>
        <div className={styles.navigationInner}>
          <Link href='/'>
            <a className={styles.logo}>
              <Image src={icon} alt='logo' />
            </a>
          </Link>
          <div
            className={`${styles.navigationRight} ${css(classes.fadeIn)} ${
              navigationOpen && styles.open
            }`}
          >
            <div
              // type='button'
              className={styles.closeButton}
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <i className='fa fa-times'> <span>CLOSE</span></i>
            </div>
            <Link href='/'>
              <a className={styles.logo}>
                <Image src={icon2} alt='logo' />
              </a>
            </Link>

            {navigationData.menuItems.map((data, index) => (
              <div className={styles.menuItemWrap} key={index}>
                {data.url ? (
                  <Link href={data.url}>
                    <a className={styles.menuItem}>{data.title}</a>
                  </Link>
                ) : (
                  <>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      id={data.title}
                      name={data.title}
                    />
                    <label className={styles.icon} htmlFor={data.title}>
                      <i className='fa fa-angle-right' />
                    </label>
                    <div className={styles.menuItem}>{data.title}</div>
                    <Submenu
                      submenu={data.submenu}
                      classImplement={styles.submenu}
                    />
                  </>
                )}
              </div>
            ))}
            <div className={styles.boxSearch}>
              <label htmlFor='search'><i className={`${'fas fa-search'}`} /></label>
              <input type='text' id='search' name='search' placeholder={'SEARCH'} />
            </div>
            <SocialIcon />
          </div>
          <div className={styles.btnControl}>
            <button
              type='button'
              className={styles.menuButton}
              onClick={() => setOpenSearch(!openSearch)}
            >
              <i className='fas fa-search' />
            </button>
            <button
              type='button'
              className={styles.menuButton}
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <i className='fa fa-bars' />
            </button>
          </div>
          {openSearch && <BoxSearch cancelBox={cancelBox} />}
          <NavBarRightSide />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
