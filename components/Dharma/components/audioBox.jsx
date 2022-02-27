import React from 'react';
import styles from '../../../styles/Dharma/componentDharma.module.scss';
import { dataDharma } from '../../../utils/data-config';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import { StyleSheet, css } from 'aphrodite';
import { zoomIn } from 'react-animations';

const AudioBox = () => {

  const styles2 = StyleSheet.create({
    zoomIn: {
      visibility: 'visible',
      opacity: 1,
      animationName: zoomIn,
      animationDuration: '1s',
      scrollingBehavior: 'smooth',
    },
  });

  return (
    <section className={stylesGlobal.section + ' ' + css(styles2.zoomIn)}>
      <div className={styles.dharma}>
        {dataDharma.map((_data, index) => {
          return (
            <figure className={styles.picDharma} key={index}>
              {/* <div className={styles.backgroundColorBlack}> */}
              <img src={_data.urlPic.src} alt='Dharma' />
              <audio
                className={styles.audio}
                src={_data.urlAudio}
                controls={true}
              />
              <figcaption className={styles.topicAuthor}>
                <p className={styles.topic}>{_data.title}</p>
                <span className={styles.author}>
                by <b>{_data.author}</b>{' '}
              </span>
              </figcaption>
              {/* </div> */}
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default AudioBox;
