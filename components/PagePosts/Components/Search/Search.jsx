import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.backgroundColor}>
      <div className={styles.wrapperBox}>
        <p className={styles.name}>Search</p>
        <div className={styles.boxSearch}>
          <label htmlFor='search'><i className={`fas fa-search`} /></label>
          <input type='text' id='search' name='search' placeholder={'Search'} />
        </div>
      </div>
    </div>
  );
};

export default Search;
