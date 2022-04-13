import React from 'react';
import styles from './Products.module.scss';
import Product from './Component/ComponentProduct/ComponentProduct';

const Products = ({ currentItems }) => {
  return (
    <div className={styles.wrapperProduct}>
      <div className={styles.listProduct}>
        {currentItems.map((_data, index) => (
          <Product _data={_data} key={index} detail={true} />
        ))}
      </div>
    </div>
  );
};

export default Products;
