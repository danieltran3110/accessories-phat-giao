import React from 'react';
import styles from '../componentSideBar.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Filter = () => {

  const [value, setValue] = React.useState([8, 12]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={stylesGlobal.backgroundColor}>
      <div className={styles.wrapperBox}>
        <h2 className={styles.title}>Filter by price</h2>
        <Box sx={{ width: ' 100% ' }}>
          <Slider
            className={styles.sliderPrice}
            value={value}
            onChange={handleChange}
            marks={true}
            min={8}
            max={15}
            // defaultValue={8}
            sx={{
              '& .css-187mznn-MuiSlider-root': {
                marginLeft: '10px',
                paddingRight: '10px',
                cursor: 'e-resize',
              },
              '& .css-14pt78w-MuiSlider-rail': {
                display: 'none',
                cursor: 'e-resize',
              },

              '& .MuiSlider-mark': {
                display: 'none',
              },

              '& .css-eg0mwd-MuiSlider-thumb': {
                borderRadius: 0,
                width: '15px',
                height: '15px',
                cursor: 'e-resize',

                '&:after': {
                  display: 'none',
                },
                '&:hover': {
                  boxShadow: 'none',

                },
              },

              '& .Mui-active': {
                boxShadow: 'none',
              },
              '& .Mui-focusVisible': {
                boxShadow: 'none',
              },
            }
            }
          />
        </Box>
        <p className={styles.price}>PRICE: <span>${value[0]} - ${value[1]}</span></p>
        <p className={styles.btnFilter}>FILTER</p>
      </div>
    </div>
  );
};

export default Filter;
