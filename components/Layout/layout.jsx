import NavBar from '../NavBar/componentNavBar';
import Banner from '../Banner/componentBanner';
import Footer from '../Footer/footer';
import Zalo from '../Zalo/zalo';
import ScrollButton from '../ScrollButton/componentScrollButton';
import Script from 'next/script';
import React from 'react';

export default function Layout(props) {
  return (
    <>
      <Script src='https://sp.zalo.me/plugins/sdk.js' />
      <Script  src='https://kit.fontawesome.com/618a331a9e.js'
               crossOrigin='anonymous' />
      <NavBar />
      {/*<Banner />*/}
      {props.children}
      <ScrollButton />
      <Zalo />
      <Footer />
    </>
  );
}