import React from 'react';
import styles from '../../styles/Banner/componentBanner.module.scss';
import Image from 'next/image';
import { dataBanner} from '../../utils/data-config';

const Banner = (props) => {
  return (
    <div className={styles.banner}>
      <figure className={styles.picBanner}>
        <Image className={styles.img} src={dataBanner.src} alt={dataBanner.alt} />
        <figcaption className={styles.titleBanner}>
          {dataBanner.title}
          <span className={styles.subTitleBanner}>
            <a href='home'>HOME</a> - <i>{dataBanner.title}</i>
          </span>
        </figcaption>
      </figure>
    </div>
  );
};

export default Banner;
