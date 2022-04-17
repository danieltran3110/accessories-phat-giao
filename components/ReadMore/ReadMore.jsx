import React, { useState } from 'react';
import styles from './ReadMore.module.scss';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={styles.content}>
      {isReadMore ? text.slice(0, 450) : text}
      <span onClick={toggleReadMore} className={styles.readOrHide}>
        {isReadMore ? '...Read more' : ' Show less'}
      </span>
    </p>
  );
};

export default ReadMore