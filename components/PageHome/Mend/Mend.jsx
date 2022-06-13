import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Mend.module.scss';
import video2 from '../../../assets/images/video2.png';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import MendGrid from './Components/MendGrid';
import {attributes} from '../../../content/home/mend.md';

const Mend = () => {
  const [isPlay, setIsPlay] = useState(false);
  const vidRef = useRef('');
  const handleIsPlay = () => {
    setIsPlay(true);
    // vidRef.current.play();
  };
  let {image, linkVideo} = attributes;
  return (
    <div className={styles.backgroundColor}>
      <div className={stylesGlobal.container2}>
        <div className={styles.mend}>
          <figure className={styles.videoMend}>
            {!isPlay && (
              <>
                <Image
                  className={styles.img}
                  src={image}
                  width={16}
                  height={9}
                  layout={'responsive'}
                  alt='Video Introduce'
                />
                <figcaption
                  className={styles.btnPlay}
                  onClick={() => handleIsPlay()}
                >
                  PLAY
                </figcaption>
              </>
            )}
            {isPlay && (
              <div className={styles.embedVideo}>
                <iframe
                  src={linkVideo}
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
