import React, { useEffect, useState } from 'react';
import styles from '../../styles/PageHome/NavBar/componentNavBar.module.scss';
import icon from '../../assets/images/logo1_retina.png';
import NavBarLeftSide from '../PageHome/NavBar/components/navBarLeftSide';
import NavBarRightSide from '../PageHome/NavBar/components/navBarRightSide';
import Image from 'next/image';
import SearchBox from '../PageHome/NavBar/components/searchBox';
import NarrowNavBar from './component/narrowNavbar';

const NavBar = () => {

  const [showing, setShowing] = useState(false);

  const cancelBox = () => {
    setShowing(false);
  };

  const handleShow = () => {
    setShowing(true);
  };
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    let sticky = navbar.offsetTop;

    function FuncSticky() {
      if ((window.pageYOffset - 1) >= sticky) {
        navbar.classList.add(styles.sticky);
      } else {
        navbar.classList.remove(styles.sticky);
      }
    }

    window.onscroll = function() {
      FuncSticky();
    };
  });

  useEffect(() => {
    // const navbar = document.getElementById('navbar');
    // let sticky = navbar.offsetTop;
    let w = window.innerWidth;

    function FuncCancel() {
      if (w >= 768) {
        cancelBox();
      }
    }

    window.availWidth = function() {
      FuncCancel();
    };
  });

  return (
    <div id='navbar'>
      <nav role='navigation' className={styles.menu}>
        <label htmlFor='menu'>
          <figure className={styles.symbolNavbar}><Image src={icon} alt='Symbol' /></figure>
          <i className={`${'fas fa-search '} ${styles.search} ${styles.icon}`} />
          <i className={`${'fa fa-bars '} ${styles.icon}`} onClick={() => handleShow()} />
        </label>
        <input type='checkbox' id='menu' />
        <div className={styles.displayInlineLeft}>
          <figure className={styles.symbolNavbar2}><Image src={icon} alt='Symbol' /></figure>
        </div>
        <NavBarLeftSide />
        <NavBarRightSide />
        {/*<SearchBox />*/}
        <NarrowNavBar show={showing} cancelBox={cancelBox} />
      </nav>
    </div>
    // <div
    //   className={`${styles.navigation} ${!top && styles.nonTop}`}
    //   // style={{ position: !top && 'fixed' }}
    // >
    //   <div className='container'>
    //     <div className={styles.navigationInner}>
    //       <Link href='/'>
    //         <a className={styles.logo}>
    //           <Image src={logoImg} alt='logo'/>
    //         </a>
    //       </Link>
    //       <div
    //         className={`${styles.navigationRight} ${
    //           navigationOpen && styles.open
    //         }`}
    //       >
    //         <button
    //           type='button'
    //           className={styles.closeButton}
    //           onClick={() => setNavigationOpen(!navigationOpen)}
    //         >
    //           <i className='fa-solid fa-xmark'></i>
    //         </button>
    //         <Link href='/'>
    //           <a className={styles.logo}>
    //             <Image src={logoImg2} alt='logo'></Image>
    //           </a>
    //         </Link>
    //
    //         {navigationData.menuItems.map((data, index) => (
    //           <div className={styles.menuItemWrap} key={index}>
    //             {data.url ? (
    //               <Link href={data.url}>
    //                 <a className={styles.menuItem}>{data.title}</a>
    //               </Link>
    //             ) : (
    //               <>
    //                 <input
    //                   className={styles.checkbox}
    //                   type='checkbox'
    //                   id={data.title}
    //                   name={data.title}
    //                 />
    //                 <label className={styles.icon} htmlFor={data.title}>
    //                   <i className='fa-solid fa-angle-right'></i>
    //                 </label>
    //                 <div className={styles.menuItem}>{data.title}</div>
    //                 <Submenu
    //                   submenu={data.submenu}
    //                   classImplement={styles.submenu}
    //                 />
    //               </>
    //             )}
    //           </div>
    //         ))}
    //         <SocialIcon />
    //         <Button classImplement={styles.button}>Reservation</Button>
    //       </div>
    //       <button
    //         type='button'
    //         className={styles.menuButton}
    //         onClick={() => setNavigationOpen(!navigationOpen)}
    //       >
    //         <i className='fa-solid fa-bars' />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavBar;
