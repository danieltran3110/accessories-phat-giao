import React from 'react';
import NavBar from '../NavBar/componentNavBar';
import Banner from '../Banner/componentBanner';
import Footer from '../Footer/footer';
import Zalo from '../Zalo/zalo';
import ScrollButton from '../ScrollButton/componentScrollButton';
import Script from 'next/script';


export default function Layout(props) {

  return (
    <>
      <NavBar />
      <Banner title={props.title} />
      {props.children}
      <ScrollButton />
      <Zalo />
      <Footer />
    </>
  );
}