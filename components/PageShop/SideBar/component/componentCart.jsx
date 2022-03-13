import React from 'react';
import styles from '../../../../styles/PageShop/SideBar/componentSideBar.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';

const Cart = () => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <div className={styles.wrapperBox}>
        <h2 className={styles.title}>Shopping Cart</h2>
        <p>No products in the cart.</p>
      </div>
    </div>
  );
};

export default Cart;
