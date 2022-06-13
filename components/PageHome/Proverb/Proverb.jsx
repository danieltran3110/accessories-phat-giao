import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Proverb.module.scss';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import { attributes } from '../../../content/home/slideIntroduce.md';

const Proverb = () => {
  let {proverb, image, author} = attributes;
  return (
    <div className={stylesGlobal.container1}>
      <section className={stylesGlobal.section}>
        <div className={styles.proverb}>
          <figure className={styles.picProverb}>
            <Image
              className={styles.img}
              src={image}
              width={16}
              height={9}
              layout={'responsive'}
              alt='Proverb'
            />
          </figure>
          <div className={styles.contentProverb}>
            <p className={styles.detailProverb}>{proverb}</p>
            <p className={styles.author}>
              {' '}
              <b>HIS HOLINESS</b> the <br /> <b>{author}</b>{' '}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proverb;
