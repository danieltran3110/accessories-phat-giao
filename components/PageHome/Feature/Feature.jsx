import React from 'react';
import styles from './Feature.module.scss';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import Image from 'next/image';
import { attributes } from '../../../content/home/feature.md';

const Feature = () => {
  let {features} = attributes;
  return (
    <section className={`${stylesGlobal.section} ${stylesGlobal.section2}`}>
      <div className={styles.feature}>
        {features.map((_data, index) => {
          return (
            <figure
              className={styles.picFeature}
              key={index}
            >
              <Image
                className={styles.img}
                src={_data.url}
                alt={_data.alt}
                width={180}
                height={240}
                layout={'responsive'}
                objectFit={'cover'}
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
