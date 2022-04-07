import React, { useState } from 'react';
import styles from './StarsRating.module.scss';
import Rating from '@mui/material/Rating';

const StarsRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [filled, setFilled] = useState('fa fa-star');
  //
  // const [value, setValue] = React.useState(0);
  const handleHover = (index) => {
    setHover(index);
    // setFilled('fa fa-star');
  }
  //
  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type='button'
            key={index}
            className={index <= (hover || rating) ? styles.on : styles.off}
            onClick={() => setRating(index)}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(rating)}
          >
            <i className={`${filled} ${styles.customStars}`} aria-hidden='true' />
          </button>
        );
      })}
    </div>
  //   <Rating
  //     className={styles.starRating}
  //     name="simple-controlled"
  //     value={value}
  //     onChange={(event, newValue) => {
  //       setValue(newValue);
  //     }}
  //     sx={{
  //       color: '#f16f23',
  //       '& .MuiRating-iconHover': {
  //         transform: 'scale(1)',
  //
  //         '&:hover & .MuiRating-iconFilled': {
  //           color: '#282828',
  //         }
  //       },
  //       '& .MuiRating-icon': {
  //         color: '#f16f23',
  //       }
  //     }}
  //   />
  );

};

export default StarsRating;