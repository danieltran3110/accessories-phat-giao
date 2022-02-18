import React, { useState } from 'react';
import styles from '../../styles/Welcome/componentWelcome.module.scss';
import signature from '../../assets/images/A_R_Rahman_signature.png';
import { dataWelcome } from '../../utils/data-config';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.place}>
        <p className={styles.welcomePlace}>{dataWelcome.place}</p>
        <p className={styles.introduction}>
          {dataWelcome.intro}
        </p>
        <p className={styles.author}>SUPERVISING MINISTER <br /> <b>{dataWelcome.author}</b> </p>
        <figure className={styles.signature}>
          <img src={dataWelcome.signature.src} alt='Signature' />
        </figure>
      </div>
    </div>
  );
};

export default Welcome;
