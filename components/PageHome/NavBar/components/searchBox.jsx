import React from 'react';
import styles from '../componentNavBar.module.scss';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

const SearchBox = () => {
  return (
    <>
      <div className={styles.backgroundBlur}>
        {/*<i className={`'fa fa-x' ${styles.iconSearchField}`} />*/}
        {/*<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>*/}
        <div className={styles.boxSearch}>
          <i className={`${'fas fa-search '} ${styles.iconSearchField}`} aria-hidden/>
          {/*<label htmlFor="fname">First name:</label>*/}
          <input type="text" id="fname" name="fname"/>
          <i className={`${'fa fa-times '} ${styles.iconSearchField}`} aria-hidden/>
        {/*</Box>*/}
        </div>
      </div>

    </>);
};

export default SearchBox;
