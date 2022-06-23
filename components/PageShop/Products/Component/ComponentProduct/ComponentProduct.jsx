import React from 'react';
import styles from './ComponentProduct.module.scss';
import Image from 'next/image';
import Stars from '../ComponentStars';
import Link from 'next/link';
import ReadMore from '../../../../ReadMore/ReadMore';

const Product = ({ _data, detail, version2, style }) => {
  return (
    <div className={`${styles.item} ${version2 && styles[style]}`}>
      <Link href={`/product/${_data.slug}`}>
        <a>
          <div className={`${styles.wrapperImage}`}>
            <figure className={styles.picProduct}>
              <Image
                src={_data.src}
                alt={_data.alt}
                width={2}
                height={3}
                layout={'responsive'}
                objectFit={'cover'}
              />
              <figcaption className={styles.detailInfo}>
                <p className={`${styles.icon}`}>
                  <i
                    className={'fa fa-shopping-cart'}
                    aria-hidden
                  />
                </p>
                <p className={`${styles.icon2}`}>
                  <i
                    className={'fa fa-eye'}
                    aria-hidden
                  />
                </p>
              </figcaption>
            </figure>
          </div>
        </a>
      </Link>
      {detail && (
        <div className={styles.infoProduct}>
          <p className={styles.name}>{_data.name}</p>
          {_data.numStars && <Stars numStars={_data.numStars} />}
          {version2 && <ReadMore>{_data.content}</ReadMore>}
          <p className={styles.money}>${_data.money}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
