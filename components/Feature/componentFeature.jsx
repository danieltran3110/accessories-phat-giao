import React from 'react';
import styles from '../../styles/Feature/componentFeature.module.scss';
import { dataFeature } from '../../utils/data-config';
import stylesGlobal from '../../assets/scss/global.module.scss';

const Feature = () => {

  return (
    <section className={`${stylesGlobal.section} ${stylesGlobal.section2}`}>
      <div className={styles.feature}>
        {dataFeature.map((_data, index) => {
          return (
            <figure className={styles.picFeature} key={index}>
              <img src={_data.url.src} alt='Feature' />
              <figcaption className={styles.titleFeature}>
                {_data.title}
              </figcaption>
              <figcaption className={styles.contentFeature}>
                {_data.content}
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
