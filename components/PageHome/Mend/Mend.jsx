import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Mend.module.scss';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import MendGrid from './Components/MendGrid';
import { attributes } from '../../../content/home/mend.md';
import ComponentVideo from '../../PagePosts/Components/ComponentVideo/ComponentVideo';

const Mend = () => {
  const [isPlay, setIsPlay] = useState(false);
  const vidRef = useRef('');
  const handleIsPlay = () => {
    setIsPlay(true);
    // vidRef.current.play();
  };
  let { image, linkVideo } = attributes;
  let urlPic = image;
  let urlVideo = linkVideo;
  let altPic = 'budhha';
  let video = { urlPic, urlVideo, altPic };
  let data = {video};
  return (
    <div className={styles.backgroundColor}>
      <div className={stylesGlobal.container2}>
        <div className={styles.mend}>
          <div className={styles.video}>
            <ComponentVideo
              _data={data}
              showDate={true}
            />
          </div>
          <MendGrid />
        </div>
      </div>
    </div>
  );
};

export default Mend;
