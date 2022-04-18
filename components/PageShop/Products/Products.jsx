import React from 'react';
import styles from './Products.module.scss';
import Product from './Component/ComponentProduct/ComponentProduct';

const Products = ({ currentItems, version2 }) => {
  return (
    <div className={styles.wrapperProduct}>
      <div className={`${!version2 && styles.listProduct}`}>
        {currentItems.map((_data, index) =>
          version2 ? (
            <Product
              _data={_data}
              key={index}
              detail={true}
              version2={true}
              style={'item2'}
            />
          ) : (
            <Product
              _data={_data}
              key={index}
              detail={true}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Products;
