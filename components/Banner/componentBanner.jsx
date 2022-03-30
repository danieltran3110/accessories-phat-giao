import React from 'react';
import styles from './componentBanner.module.scss';
import Image from 'next/image';
import { dataBanner } from '../../utils/data-config';
import { fadeInUp } from 'react-animations';
import { css, StyleSheet } from 'aphrodite';
// import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const Banner = (props) => {

  const styles2 = StyleSheet.create({
    fadeInUp: {
      animationName: fadeInUp,
      animationDuration: '1s',
    },
  });

  // const FadeInUpAnimation = keyframes`${fadeInUp}`;
  //
  // const FadeInUpDiv = styled.div`
  //   animation: 1s ${FadeInUpAnimation}
  // `;

  return (
    <div className={styles.banner}>
      <figure className={styles.picBanner}>
        <Image className={styles.img} layout={'fill'} objectFit={'fill'} src={dataBanner.src} alt={dataBanner.alt} />
        {/*<FadeInUpDiv>*/}
          <figcaption className={`${styles.titleBanner} ${css(styles2.fadeInUp)}`}>
            {dataBanner.title}
            <p className={styles.subTitleBanner}>
              <Link href={'/'}><a>HOME</a></Link> - <i>{dataBanner.title}</i>
            </p>
          </figcaption>
        {/*</FadeInUpDiv>*/}
      </figure>
    </div>
  );
};

export default Banner;
