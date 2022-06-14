import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Vision.module.scss';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import { dataVision } from '../../../utils/data-config';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { attributes } from '../../../content/home/vision.md';

const Vision = () => {
  let {
    title,
    content,
    author,
    proverb,
    urlPictureVideo,
    altPictureVideo,
    urlAudio, 
    urlPicture,
    altPicture,
  } = attributes;
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
          <SectionTitle
            title={title}
            left={true}
          />
          <p className={styles.contentVision}>{content}</p>
          <section className={stylesGlobal.section}>
            <div className={styles.videoSpeech}>
              <figure className={styles.video}>
                {showing && (
                  <>
                    {' '}
                    <Image
                      className={styles.img}
                      src={urlPictureVideo}
                      alt={altPictureVideo}
                      width={16}
                      height={9}
                      layout={'responsive'}
                    />
                    <figcaption
                      className={styles.btnPlay}
                      onClick={() => handleIsPlay()}
                    >
                      <i
                        aria-hidden
                        className='fas fa-caret-right'
                      />
                    </figcaption>
                  </>
                )}
                {isPlay && (
                  <div className={styles.embedVideo}>
                    <iframe
                      src={urlAudio}
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
                {proverb}
                <span className={styles.author}>{author}</span>
              </div>
            </div>
          </section>
        </div>
        <figure className={styles.meditation}>
          <section className={stylesGlobal.section}>
            <Image
              className={styles.img}
              src={urlPicture}
              alt={altPicture}
              width={200}
              height={250}
              layout={'responsive'}
            />
          </section>
        </figure>
      </div>
    </div>
  );
};

export default Vision;
