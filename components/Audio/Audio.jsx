import React from 'react';
import styles from './Audio.module.scss';
import Image from 'next/image';

const Audio = ({ _data, index }) => {

  return (
    <figure className={styles.picDharma} key={index}>
      <Image className={styles.img} src={_data.urlPic} alt='Dharma' />
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
    </figure>
  );
};

export default Audio;
