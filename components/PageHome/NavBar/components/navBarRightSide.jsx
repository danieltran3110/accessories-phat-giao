import React from 'react';
import styles from '../../../../styles/PageHome/NavBar/componentNavBar.module.scss';

const NavBarRightSide = () => {
  return (
      <div className={styles.rightSide}>
        <div className={`${styles.title} ${styles.displayXLNone}` }>
          <p>
            <i aria-hidden className='fa fa-calendar' />
            Calender
          </p>
        </div>
        <div className={styles.title}>
          <p>
            <i aria-hidden className='fa fa-heart' />
            Donate
          </p>
        </div>
    </div>);
};

export default NavBarRightSide;
