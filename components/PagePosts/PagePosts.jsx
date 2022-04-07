import React from 'react';
import styles from './PagePosts.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';
import SideBarPosts from './Components/SideBarPosts/SideBarPosts';

const PagePosts = () => {

  return (
    <div className={`${stylesGlobal.container1}`}>
      <SideBarPosts />
    </div>
  );
};

export default PagePosts;
