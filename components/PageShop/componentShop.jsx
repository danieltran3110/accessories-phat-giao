import React, { createRef, useEffect, useState } from 'react';
import styles from './componentShop.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';
import SideBar from './SideBar/componentSideBar';
import PaginatedItems from './PaginatedItems/componentPaginatedItems';
import Head from 'next/head';
import Script from 'next/script';


const Shop = () => {

  const [showStickyBar, setShowStickyBar] = useState(false);

  // useEffect(() => {
  //   let counting;
  //
  //   setTimeout(() => {
  //     const inViewport = (entries, observer) => {
  //       entries.forEach((entry) => {
  //         // if (counting === 0 || counting === 1) {
  //         //   setShowStickyBar(false);
  //         //   counting += 1;
  //         // } else {
  //           setShowStickyBar(!entry.isIntersecting);
  //         // }
  //       });
  //     };
  //
  //     const Obs = new IntersectionObserver(inViewport);
  //
  //     const ELs_inViewport = document.querySelectorAll(['content']);
  //     ELs_inViewport.forEach(EL => {
  //       Obs.observe(EL);
  //     });
  //   }, 500);
  // }, []);

  return (
    <div className={`${stylesGlobal.container1} ${styles.margin}`}>
      <div className={styles.shop} id='main-content'>
        <SideBar />
        <PaginatedItems itemsPerPage={8} id='content' />
      </div>
    </div>
  );
};

export default Shop;