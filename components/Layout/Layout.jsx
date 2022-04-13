import React from 'react';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ScrollButton from '../ScrollUpButton/ScrollUpButton';

export default function Layout(props) {

  return (
    <>
      <NavBar />
      <Banner title={props.title} />
      {props.children}
      <ScrollButton />
      <Footer />
    </>
  );
}