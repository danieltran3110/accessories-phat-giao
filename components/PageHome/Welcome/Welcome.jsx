import React from 'react';
import Image from 'next/image';
import styles from './Welcome.module.scss';
import { dataWelcome } from '../../../utils/data-config';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import SectionTitle from '../../SectionTitle/SectionTitle';
import {attributes} from '../../../content/home/welcome.md';

const Welcome = () => {
  let {title, content, author} = attributes;
  return (
    <div className={stylesGlobal.backgroundColor}>
      <section className={stylesGlobal.section}>
        <div className={stylesGlobal.container2}>
          <div className={styles.welcome}>
            <div className={styles.place}>
              <SectionTitle
                title={title}
                left={false}
              />
              <p className={styles.introduction}>{content}</p>
              <p className={styles.author}>
                SUPERVISING MINISTER <br /> <b>{author}</b>
              </p>
              <figure className={styles.signature}>
                <Image
                  src={dataWelcome.signature}
                  alt='Signature'
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
