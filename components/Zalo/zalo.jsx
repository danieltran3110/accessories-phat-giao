import React from 'react';
import styles from '../../styles/Zalo/zalo.module.scss';
import Script from 'next/script';

const Zalo = () => {
  return (
    <>
      <div className={`${'zalo-chat-widget'} ${styles.zaloChatWidget}`} data-oaid='4000337418991914011'
           data-welcome-message='Rất vui khi được hỗ trợ bạn!'
           data-autopopup='5' data-width='300' data-height='300'
      >
      </div>
      <Script src='https://sp.zalo.me/plugins/sdk.js' />
    </>
  );
};

export default Zalo;
