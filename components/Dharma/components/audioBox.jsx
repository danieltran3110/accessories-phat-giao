import React from 'react';
import styles from '../../../styles/Dharma/componentDharma.module.scss';
import { dataDharma } from '../../../utils/data-config';

const AudioBox = () => {
  return (
    <div className={styles.dharma}>
      {dataDharma.map((_data, index) => {
        return (
            <figure className={styles.picDharma} key={index}>
            {/* <div className={styles.backgroundColorBlack}> */}
              <img src={_data.urlPic.src} alt='Dharma' />
              <audio
                className={styles.audio}
                src={_data.urlAudio}
                controls='true'
              ></audio>
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
  );
};

export default AudioBox;
