import React, { useState } from 'react';
import styles from '../../styles/Proverb/componentProverb.module.scss';
import { dataProverb } from '../../utils/data-config';
import stylesGlobal from '../../assets/scss/global.module.scss';

const Proverb = () => {
  return (
    <div className={stylesGlobal.container1}>
      <section className={stylesGlobal.section}>
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
      </section>
    </div>
  );
};

export default Proverb;
