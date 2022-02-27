import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectFade, Pagination } from 'swiper';
import styles from '../../styles/Home/componentSwiper.module.scss';
import logo from '../../assets/images/logo2_retina.png';
import { dataSwiper } from '../../utils/data-config';
import { css, StyleSheet } from 'aphrodite';
import { fadeInUp, zoomIn } from 'react-animations';

const SlideIntro = () => {

  const styles2 = StyleSheet.create({
    fadeInUp: {
      animationName: fadeInUp,
      animationDuration: '0.5s',
      scrollingBehavior: 'smooth',
    },
    zoomIn: {
      animationName: zoomIn,
      animationDuration: '0.5s',
      scrollingBehavior: 'smooth',
    }
  });

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
    }
  };

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        direction={'vertical'}
        effect={'fade'}
        pagination={pagination}
        modules={[EffectFade, Pagination]}
        className={styles.mySwiperSlide}
      >
        {dataSwiper.map((_data, index) => {
          return (
              <SwiperSlide key={index.toString()}>
                <div className={styles.slide}>
                  <div className={styles.placeName}>
                    <p className={styles.place + ' ' + css(styles2.fadeInUp)}>
                      {_data.title} <br /> {_data.subtitle}
                    </p>
                    <div className={`${styles.learnMore} ${css(styles2.zoomIn)}`}>{_data.titleBtn}</div>
                  </div>
                  <figure className={styles.logo}>
                    <img src={logo.src} alt='logo' />
                  </figure>
                  <figure className={styles.picSlider}>
                    <img src={_data.url.src} alt='Slide' />
                  </figure>
                </div>
              </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SlideIntro;
