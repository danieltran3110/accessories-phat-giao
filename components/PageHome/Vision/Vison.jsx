import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Vision.module.scss';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import { dataVision } from '../../../utils/data-config';
import SectionTitle from '../../SectionTitle/SectionTitle';

const Vision = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [showing, setShowing] = useState(true);

  const handleIsPlay = () => {
    setIsPlay(true);
    // vidRef.current.play();
    setShowing(false);
  };

  return (
    <div className={stylesGlobal.container1}>
      <div className={styles.visionWrapper}>
        <div className={styles.vision}>
          <SectionTitle title={dataVision.title} left={true} />
          <p className={styles.contentVision}>{dataVision.content}</p>
          <section className={stylesGlobal.section}>
            <div className={styles.videoSpeech}>
              <figure className={styles.video}>
                {showing && <> <Image className={styles.img} src={dataVision.urlPic1} alt='Vision' />
                  <figcaption
                    className={styles.btnPlay}
                    onClick={() => handleIsPlay()}
                  >
                    <i aria-hidden className='fas fa-caret-right' />
                  </figcaption>
                </>}
                {isPlay && (
                  <div className={styles.embedVideo}>
                    <iframe
                      src={dataVision.urlAudio}
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
              <div className={styles.speech}>
                {dataVision.proverb}
                <span className={styles.author}>{dataVision.author}</span>
              </div>
            </div>
          </section>
        </div>
        <figure className={styles.meditation}>
          <section className={stylesGlobal.section}>
            <Image className={styles.img} src={dataVision.urlPic2} alt='Vision 2' />
          </section>
        </figure>
      </div>
    </div>
  );
};

export default Vision;
