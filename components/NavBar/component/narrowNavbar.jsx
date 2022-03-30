import React, { useState } from 'react';
import styles from '../../PageHome/NavBar/componentNavBar.module.scss';
import Image from 'next/image';
import icon from '../../../assets/images/iconNarrow.jpg';
import NavBarLeftSide from '../../PageHome/NavBar/components/navBarLeftSide';


const NarrowNavBar = (props) => {

  return (
    <>
      {props.show && (<div className={styles.positionFixed}>
        <div className={styles.backgroundBlack}>
          <div className={styles.btnClose} onClick={() => props.cancelBox()}>
            <i className='fa fa-times'> <span>CLOSE</span></i>
          </div>
          <div className={styles.narrowNavBar}>
            <figure className={styles.iconLogo}>
              <Image className={styles.img} src={icon} alt={'main logo'} objectFit={'contain'} />
            </figure>
            <div className={styles.menu}>
              <NavBarLeftSide showing={true} />
            </div>
            <div className={styles.boxSearch}>
              <label htmlFor='search'><i className={`${'fas fa-search'}`} /></label>
              <input type='text' id='search' name='search' placeholder={'SEARCH'} />
            </div>
            <div className={styles.iconInfo}>
              <i className='fab fa-facebook-f' />
              <i className='fa fa-twitter' />
              <i className='fa fa-youtube-play' />
              <i className='fa fa-instagram' />
            </div>
          </div>
        </div>
      </div>)
      }
    </>
  );
};

export default NarrowNavBar;
