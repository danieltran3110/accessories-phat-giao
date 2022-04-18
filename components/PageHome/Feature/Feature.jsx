import React from 'react';
import styles from './Feature.module.scss';
import { dataFeature } from '../../../utils/data-config';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import Image from 'next/image';

const Feature = () => {
  return (
    <section className={`${stylesGlobal.section} ${stylesGlobal.section2}`}>
      <div className={styles.feature}>
        {dataFeature.map((_data, index) => {
          return (
            <figure
              className={styles.picFeature}
              key={index}
            >
              <Image
                className={styles.img}
                src={_data.url}
                alt='Feature'
              />
              <figcaption className={styles.titleFeature}>
                {_data.title} <br />
                <span className={styles.contentFeature}>{_data.content}</span>
              </figcaption>
              <figcaption className={styles.btnView}>VIEW</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Feature;
