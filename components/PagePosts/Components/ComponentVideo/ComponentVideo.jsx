import styles from './ComponentVideo.module.scss';
import Image from 'next/image';
import video2 from '../../../../assets/images/video2.png';
import React, { useState } from 'react';
import ComponentDay from '../ComponentDay/ComponentDay';

const ComponentVideo = ({ _data }) => {
  const [isPlay, setIsPlay] = useState(false);
  const handleIsPlay = () => {
    setIsPlay(true);
  };

  return (
    <figure className={styles.videoMend}>
      {!isPlay && <div className={styles.pic}>
        <Image className={styles.img} src={video2} alt='Video Introduce' />
        <figcaption className={styles.btnPlay} onClick={() => handleIsPlay()}>
          PLAY
        </figcaption>
        <ComponentDay _data={_data} />
      </div>}
      {isPlay && (
        <div className={styles.embedVideo}>
          <iframe
            src={_data.urlVideo}
            width={'inherit'}
            height={'inherit'}
            frameBorder={0}
            allow={'autoplay; fullscreen; picture-in-picture'}
            allowFullScreen
          />
        </div>
      )}
    </figure>
  );
};

export default ComponentVideo;
