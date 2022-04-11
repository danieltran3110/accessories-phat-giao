import React from 'react';
import styles from '../../componentDharma.module.scss';
import { dataDharma } from '../../../../../utils/data-config';
import stylesGlobal from '../../../../../assets/scss/global.module.scss';
import { StyleSheet, css } from 'aphrodite';
import { zoomIn } from 'react-animations';
import Audio from '../../../../Audio/Audio';

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
        {dataDharma.map((_data, index) =>
          <Audio _data={_data} index={index} />
        )}
      </div>
    </section>
  );
};

export default AudioBox;
