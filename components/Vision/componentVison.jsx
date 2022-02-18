import React, { useState, useRef } from 'react';
import styles from '../../styles/Vision/componentVision.module.scss';
import video2 from '../../assets/images/video2.png';
import stylesGlobal from '../../assets/scss/global.module.scss';
import vision1 from '../../assets/images/vision1.jpg';
import vision2 from '../../assets/images/vision2.jpg';
import { dataVision } from '../../utils/data-config';

const Vision = () => {
  const [isPlay, setIsPlay] = useState(false);
  const handleIsPlay = () => {
    setIsPlay(true);
    // vidRef.current.play();
  };

  return (
    <div className={stylesGlobal.container}>
      <div className={styles.visionWrapper}>
        <div className={styles.vision}>
          <p className={styles.titleVision}>{dataVision.title}</p>
          <p className={styles.contentVision}>
          {dataVision.content}
          </p>
          <div className={styles.videoSpeech}>
            <figure className={styles.video}>
              <img src={dataVision.urlPic1.src} alt='Vision' />
              <figcaption
                className={styles.btnPlay}
                onClick={() => handleIsPlay()}
              >
                <i className='fas fa-caret-right'></i>
              </figcaption>
              {isPlay && (
                <div className={styles.embedVideo}>
                  <iframe
                    src= {dataVision.urlAudio}
                    width='inherit'
                    height='inherit'
                    frameborder='0'
                    allow='autoplay; fullscreen; picture-in-picture'
                    allowfullscreen
                    // ref={vidRef}
                  />
                </div>
              )}
            </figure>
            <div className={styles.speech}>
              {dataVision.proverb}
              <span className={styles.author}>
              {dataVision.author}
              </span>
            </div>
          </div>
        </div>
            <figure className={styles.meditation}>
              <img src={dataVision.urlPic2.src} alt="Vision 2" />
            </figure>
      </div>
    </div>
  );
};

export default Vision;
