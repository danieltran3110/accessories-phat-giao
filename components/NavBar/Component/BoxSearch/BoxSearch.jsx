import React from 'react';
import styles from './BoxSearch.module.scss';

const BoxSearch = props => {
  return (
    <div className={styles.backgroundBlur}>
      <div className={styles.boxSearch}>
        <i
          className={`fas fa-search  ${styles.iconSearchField}`}
          aria-hidden
        />
        <input
          type='text'
          id='search'
          name='search'
          placeholder={'Search'}
        />
        <i
          className={`fa fa-times  ${styles.iconSearchField} ${styles.right}`}
          onClick={() => props.cancelBox()}
          aria-hidden
        />
      </div>
    </div>
  );
};

export default BoxSearch;
