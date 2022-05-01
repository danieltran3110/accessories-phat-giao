import React from 'react';
import styles from './ComponentPicture.module.scss';
import Image from 'next/image';
import ComponentDay from '../ComponentDay/ComponentDay';

const ComponentPicture = ({ _data, maxHeight }) => {
  return (
    <figure className={`${styles.pic} ${maxHeight && styles.maxHeight}`}>
      <div className={styles.wrapperImg}>
      <Image
        className={styles.img}
        src={_data.src}
        alt={_data.alt}
        layout={'fill'}
        // width={'100%'}
        // height={'100%'}
      />
      </div>
      <ComponentDay _data={_data} />
      <figcaption className={styles.btnView}>VIEW</figcaption>
    </figure>
  );
};

export default ComponentPicture;
