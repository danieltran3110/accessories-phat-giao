import React, { useState } from 'react';
import styles from '../../styles/Proverb/componentProverb.module.scss';
import proverb1 from '../../assets/images/proverb1.jpg';
import { dataProverb } from '../../utils/data-config';

const Proverb = () => {
  return (
    <div className={styles.proverb}>
      <figure className={styles.picProverb}>
        <img src={dataProverb.url.src} alt='Proverb' />
      </figure>
      <div className={styles.contentProverb}>
        <p className={styles.detailProverb}>
          {dataProverb.proverb}
        </p>
        <p className={styles.author}>
          {' '}
          <b>HIS HOLINESS</b> the <br /> <b>{dataProverb.author}</b>{' '}
        </p>
      </div>
    </div>
  );
};

export default Proverb;
