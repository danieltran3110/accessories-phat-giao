import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import styles from './RelatedProduct.module.scss';
import Product from '../../../PageShop/Products/Component/ComponentProduct/ComponentProduct';

const RelatedProduct = ({_data}) => {

  return (
    <>
      <SectionTitle title={'Related products'} />
      <div className={styles.displayGrid4}>
        {_data.products.map((_data, index) => (
          <Product _data={_data} key={index} detail={false} />
        ))}
      </div>
    </>
  );
};

export default RelatedProduct;
