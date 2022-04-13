import React from 'react';
import styles from './Banner.scss';
import Image from 'next/image';
import { dataBanner } from '../../utils/data-config';
import { fadeInUp } from 'react-animations';
import { css, StyleSheet } from 'aphrodite';
import Link from 'next/link';

const Banner = ({ title }) => {

  const styles2 = StyleSheet.create({
    fadeInUp: {
      animationName: fadeInUp,
      animationDuration: '1s',
    },
  });

  return (
    <div className={styles.banner}>
      <figure className={styles.picBanner}>
        <Image className={styles.img} src={dataBanner.src} alt={dataBanner.alt} />
        <figcaption className={`${styles.titleBanner} ${css(styles2.fadeInUp)}`}>
          {title}
          <p className={styles.subTitleBanner}>
            <Link href={'/'}><a>HOME</a></Link> - <i>{title}</i>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Banner;
