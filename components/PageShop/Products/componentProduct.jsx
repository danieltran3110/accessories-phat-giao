import React from 'react';
import styles from '../../../styles/PageShop/Products/componentProducts.module.scss';
import Image from 'next/image';
import Stars from './component/componentStars';

const Products = ({ currentItems }) => {

  return (
    <div className={styles.wrapperProduct}>
      <div className={styles.listProduct}>
        {currentItems.map((_data, index) =>
          <div className={styles.item} key={index}>
            <div className={styles.wrapperImage}>
              <figure className={styles.picProduct}>
                <Image src={_data.src} alt={_data.alt} />
              </figure>
            </div>
            <div className={styles.infoProduct}>
              <p className={styles.name}>{_data.name}</p>
              {_data.numStars && <Stars numStars={_data.numStars} />}
              <p className={styles.money}>${_data.money}</p>
            </div>
            <div className={styles.detailInfo}>
              <p className={`${styles.icon}`}><i className={'fa fa-shopping-cart'} aria-hidden /></p>
              <p className={`${styles.icon} ${styles.icon2}`}><i className={'fa fa-eye'} aria-hidden /></p>
            </div>
          </div>,
        )}
      </div>
    </div>
  );
};

export default Products;
