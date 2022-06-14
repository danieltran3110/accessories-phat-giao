import React from 'react';
import styles from './Audio.module.scss';
import Image from 'next/image';

const Audio = ({ _data }) => {
  return (
    <figure className={styles.picDharma}>
      <Image
        className={styles.img}
        src={_data.urlPic}
        alt={_data.alt}
        width={3}
        height={2}
        layout={'responsive'}
      />
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
