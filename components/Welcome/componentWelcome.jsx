import React from 'react';
import styles from '../../styles/Welcome/componentWelcome.module.scss';
import { dataWelcome } from '../../utils/data-config';
import stylesGlobal from '../../assets/scss/global.module.scss';

const Welcome = () => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <section className={stylesGlobal.section}>
        <div className={stylesGlobal.container2}>
          <div className={styles.welcome}>
            <div className={styles.place}>
              <p className={styles.welcomePlace}>{dataWelcome.place}</p>
              <p className={styles.introduction}>
                {dataWelcome.intro}
              </p>
              <p className={styles.author}>SUPERVISING MINISTER <br /> <b>{dataWelcome.author}</b></p>
              <figure className={styles.signature}>
                <img src={dataWelcome.signature.src} alt='Signature' />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
