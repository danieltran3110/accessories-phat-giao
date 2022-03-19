import React from 'react';
import styles from '../../styles/Banner/componentBanner.module.scss';
import Image from 'next/image';
import { dataBanner } from '../../utils/data-config';
import stylesGlobal from '../../assets/scss/global.module.scss';
import { fadeInUp } from 'react-animations';
import { css, StyleSheet } from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const Banner = (props) => {

  const styles2 = StyleSheet.create({
    fadeInUp: {
      animationName: fadeInUp,
      animationDuration: '1s',
    },
  });

  const FadeInUpAnimation = keyframes`${fadeInUp}`;

  const FadeInUpDiv = styled.div`
    animation: 1s ${FadeInUpAnimation};
`;

  return (
    <div className={styles.banner}>
      <figure className={styles.picBanner}>
        <Image className={styles.img} src={dataBanner.src} alt={dataBanner.alt} />
        <FadeInUpDiv>
          <figcaption className={`${styles.titleBanner}`}>
            {dataBanner.title}
            <p className={styles.subTitleBanner}>
              <Link href={'/'}><a>HOME</a></Link> - <i>{dataBanner.title}</i>
            </p>
          </figcaption>
        </FadeInUpDiv>
      </figure>
    </div>
  );
};

export default Banner;
