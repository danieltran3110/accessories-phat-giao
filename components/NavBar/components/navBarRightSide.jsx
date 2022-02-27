import React from 'react';
import styles from '../../../styles/NavBar/componentNavBar.module.scss';

const NavBarRightSide = () => {
  return (
    <div className={styles.displayInline}>
      <div className={styles.rightSide}>
        <div className={styles.title}>
          <p>
            <i aria-hidden className='fas fa-calendar-alt' />
            Calender
          </p>
        </div>
        <div className={styles.title}>
          <p>
            <i aria-hidden className='fa fa-heart' />
            Donate
          </p>
        </div>
      </div>
    </div>);
};

export default NavBarRightSide;
