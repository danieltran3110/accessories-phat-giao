import React from 'react';
import Image from 'next/image';
import styles from './componentWelcome.module.scss';
import { dataWelcome } from '../../../utils/data-config';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import SectionTitle from '../../SectionTitle/componentSectionTitle';

const Welcome = () => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <section className={stylesGlobal.section}>
        <div className={stylesGlobal.container2}>
          <div className={styles.welcome}>
            <div className={styles.place}>
              <SectionTitle title={dataWelcome.place} left={false}/>
              <p className={styles.introduction}>
                {dataWelcome.intro}
              </p>
              <p className={styles.author}>SUPERVISING MINISTER <br /> <b>{dataWelcome.author}</b></p>
              <figure className={styles.signature}>
                <Image src={dataWelcome.signature} alt='Signature' />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
