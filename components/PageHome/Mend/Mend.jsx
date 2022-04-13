import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Mend.module.scss';
import video2 from '../../../assets/images/video2.png';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import MendGrid from './Components/MendGrid';

const Mend = () => {
  const [isPlay, setIsPlay] = useState(false);
  const vidRef = useRef('');
  const handleIsPlay = () => {
    setIsPlay(true);
    // vidRef.current.play();
  };

  return (
    <div className={styles.backgroundColor}>
      <div className={stylesGlobal.container2}>
        <div className={styles.mend}>
          <figure className={styles.videoMend}>
            {!isPlay && <>
              <Image className={styles.img} src={video2} alt='Video Introduce' />
              <figcaption className={styles.btnPlay} onClick={() => handleIsPlay()}>
                PLAY
              </figcaption>
            </>}
            {isPlay && (
              <div className={styles.embedVideo}>
                <iframe
                  src='https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0'
                  width={'inherit'}
                  height={'inherit'}
                  frameBorder={0}
                  allow={'autoplay; fullscreen; picture-in-picture'}
                  allowFullScreen
                  // ref={vidRef}
                />
              </div>
            )}
          </figure>
          <MendGrid />
        </div>
      </div>
    </div>
  );
};

export default Mend;
