import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../../styles/PageHome/Proverb/componentProverb.module.scss';
import { dataProverb } from '../../../utils/data-config';
import stylesGlobal from '../../../assets/scss/global.module.scss';

const Proverb = () => {
  return (
    <div className={stylesGlobal.container1}>
      <section className={stylesGlobal.section}>
        <div className={styles.proverb}>
          <figure className={styles.picProverb}>
            <Image className={styles.img} src={dataProverb.url} alt='Proverb' />
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
