import React from 'react';
import styles from '../../styles/Zalo/zalo.module.scss';
import Script from 'next/script';

const Zalo = () => {
  return (
    <>
      <div className='zalo-chat-widget' data-oaid='579745863508352884'
           // style={{left: '30px!important'}}
           data-welcome-message='Rất vui khi được hỗ trợ bạn!'
           data-autopopup='5' data-width='300' data-height='300'>
      </div>
      <Script src='https://sp.zalo.me/plugins/sdk.js' />
    </>
  );
};

export default Zalo;
