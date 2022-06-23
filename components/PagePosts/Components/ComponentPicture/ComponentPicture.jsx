import React from 'react';
import styles from './ComponentPicture.module.scss';
import Image from 'next/image';
import ComponentDay from '../ComponentDay/ComponentDay';

const ComponentPicture = ({ _data, maxHeight }) => {
  return (
    <figure className={`${styles.pic} ${maxHeight && styles.maxHeight}`}>
      <Image
        className={styles.img}
        src={_data.src}
        alt={_data.alt}
        width={16}
        height={9}
        layout={'responsive'}
      />
      <ComponentDay _data={_data} padding={_data.titlePost} />
        <figcaption className={styles.btnView}>VIEW</figcaption>
    </figure>
  );
};

export default ComponentPicture;
