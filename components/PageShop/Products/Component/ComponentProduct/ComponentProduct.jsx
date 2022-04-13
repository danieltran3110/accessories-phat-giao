import React from 'react';
import styles from './ComponentProduct.module.scss';
import Image from 'next/image';
import Stars from '../ComponentStars';
import Link from 'next/link';

const Product = ({ _data, detail }) => {
  return (
    <div className={styles.item}>
      <Link href={'/product'}>
        <a>
          <div className={styles.wrapperImage}>
            <figure className={styles.picProduct}>
              <Image src={_data.src} alt={_data.alt} layout={'responsive'} />
            </figure>
          </div>
        </a>
      </Link>
      {detail && (
        <>
          <div className={styles.infoProduct}>
            <p className={styles.name}>{_data.name}</p>
            {_data.numStars && <Stars numStars={_data.numStars} />}
            <p className={styles.money}>${_data.money}</p>
          </div>
        </>
      )}
      <div className={styles.detailInfo}>
        <p className={`${styles.icon}`}>
          <i className={'fa fa-shopping-cart'} aria-hidden />
        </p>
        <p className={`${styles.icon2}`}>
          <i className={'fa fa-eye'} aria-hidden />
        </p>
      </div>
    </div>
  );
};

export default Product;
