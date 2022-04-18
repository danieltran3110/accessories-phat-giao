import React from 'react';
import styles from './ImageProduct.module.scss';
import Image from 'next/image';

const ImageProduct = ({ _data, showPopUp }) => {
  return (
    <div
      className={styles.wrapperImage}
      onClick={() => showPopUp()}
    >
      <figure className={styles.picProduct}>
        <Image
          src={_data.src}
          alt={_data.alt}
        />
      </figure>
      <i
        className={`fas fa-search  ${styles.searchIcon}`}
        onClick={() => showPopUp()}
      />
    </div>
  );
};

export default ImageProduct;
