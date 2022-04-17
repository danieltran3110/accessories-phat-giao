import React from 'react';
import styles from './PopUpImage.module.scss';
import Image from 'next/image';

const PopUpImage = ({ _data, showPopUp }) => {
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  return (
    <div className={styles.popUpImage} onClick={() => showPopUp()}>
      <figure className={styles.picPopUp}>
        <Image src={_data.src} alt={_data.alt} />
      </figure>
      <i
        className='fa fa-times'
        aria-hidden='true'
        onClick={() => showPopUp()}
      />
      <i
        className={`fas fa-expand ${styles.iconFullScreen}`}
        onClick={() => toggleFullScreen()}
      />
    </div>
  );
};

export default PopUpImage;
