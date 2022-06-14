import React from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Pagination } from 'swiper';
import styles from './BeginSlide.module.scss';
import logo from '../../../assets/images/logo2_retina.png';
import { css, StyleSheet } from 'aphrodite';
import { fadeInUp } from 'react-animations';
import { attributes } from '../../../content/home/slideIntroduce.md';

const SlideIntro = () => {
  const styles2 = StyleSheet.create({
    fadeInUp: {
      animationName: fadeInUp,
      animationDuration: '1s',
    },
    zoomIn: {
      animationName: fadeInUp,
      animationDuration: '2.5s',
    },
  });

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
    },
  };
  let { items } = attributes;

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.heightSwiper}>
        <Swiper
          direction={'vertical'}
          effect={'fade'}
          pagination={pagination}
          modules={[EffectFade, Pagination]}
          className={styles.mySwiperSlide}
        >
          {items.map((_data, index) => {
            return (
              <SwiperSlide
                className={styles.slide}
                key={index}
              >
                <div className={styles.wrapperInfo}>
                  <div className={styles.placeName}>
                    <p className={styles.place + ' ' + css(styles2.fadeInUp)}>
                      {_data.title} <br /> {_data.subTitle}
                    </p>
                    <div
                      className={`${styles.learnMore} ${css(styles2.zoomIn)}`}
                    >
                      {_data.btnName}
                    </div>
                  </div>
                  <figure className={styles.logo}>
                    <Image
                      className={styles.img}
                      src={logo}
                      alt='logo'
                    />
                  </figure>
                </div>
                <figure className={styles.picSlider}>
                  <Image
                    className={styles.img}
                    src={_data.src}
                    alt={_data.alt}
                    layout={'fill'}
                  />
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideIntro;
