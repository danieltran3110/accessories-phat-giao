import React from 'react';
import styles from './PagePosts.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';
import SideBarPosts from './Components/SideBarPosts/SideBarPosts';
import PaginatedItems from './Components/PaginatedItems/PaginatedItemsProduct';

const PagePosts = () => {

  return (
    <div className={`${stylesGlobal.container1}`}>
      <div className={styles.displayGrid}>
        <PaginatedItems itemsPerPage={5} />
        <SideBarPosts />
      </div>
    </div>
  );
};

export default PagePosts;
