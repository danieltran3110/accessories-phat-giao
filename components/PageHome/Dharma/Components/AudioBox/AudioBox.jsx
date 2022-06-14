import React from 'react';
import styles from '../../Dharma.module.scss';
import stylesGlobal from '../../../../../assets/scss/global.module.scss';
import { StyleSheet, css } from 'aphrodite';
import { zoomIn } from 'react-animations';
import Audio from '../../../../Audio/Audio';
import { attributes } from '../../../../../content/home/dharma.md';

const AudioBox = () => {
  let {audios} = attributes;
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
        {audios.map((_data, index) => (
          <Audio
            _data={_data}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default AudioBox;
