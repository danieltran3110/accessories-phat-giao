import React, { useState } from 'react';
import styles from './InfoProduct.module.scss';
import Stars from '../../../PageShop/Products/Component/ComponentStars';
import ReadMore from '../../../ReadMore/ReadMore';
import stylesGlobal from '../../../../assets/scss/global.module.scss';
import ListTag from '../ListTag/ListTag';

const InfoProduct = ({ _data }) => {
  const [numInput, setNumInput] = useState(0);

  const handleIncreaseNumber = () => {
    if (numInput >= 0) {
      setNumInput(numInput + 1);
    }
  };

  const handleDecreaseNumber = () => {
    if (numInput > 0) {
      setNumInput(numInput - 1);
    }
  };

  return (
    <div className={styles.infoProduct}>
      <div className={styles.moneyStars}>
        <p className={styles.money}>$ {_data.money}</p>
        <div className={styles.stars}>
          {_data.numStars && <Stars numStars={_data.numStars} />}
        </div>
      </div>
      <ReadMore>{_data.content}</ReadMore>
      <div className={styles.buy}>
        <div className={styles.input}>
          <p className={styles.inputNumber}>{numInput}</p>
          <span
            className={styles.inputInc}
            onClick={() => handleIncreaseNumber()}
          >
            <i
              className='fa fa-angle-up'
              aria-hidden='true'
            />
          </span>
          <span
            className={styles.inputDes}
            onClick={() => handleDecreaseNumber()}
          >
            <i
              className='fa fa-angle-down'
              aria-hidden='true'
            />
          </span>
        </div>
        <button className={`${stylesGlobal.button} ${styles.btnBuy}`}>
          BUY NOW
        </button>
      </div>
      <div className={styles.type}>
        <p className={styles.typeDetail}>
          <b>CATEGORIES:</b> <ListTag _data={_data.categories} />
        </p>
        <p className={styles.typeDetail}>
          <b>TAGS:</b> <ListTag _data={_data.tags} /> 
        </p>
        <p className={styles.typeDetail}>
          <b>PRODUCT ID:</b> {_data.productID}
        </p>
      </div>
    </div>
  );
};

export default InfoProduct;
