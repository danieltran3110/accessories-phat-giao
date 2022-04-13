import React, { useState } from 'react';
import styles from './PageProduct.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import Product from '../PageShop/Products/Component/ComponentProduct/ComponentProduct';
import Stars from '../PageShop/Products/Component/ComponentStars';
import Image from 'next/image';
import { dataProductDetail } from '../../utils/data-config';
import ReviewsUser from './Components/ReviewsUser/ReviewsUser';

const ProductDetail = () => {
  const _data = dataProductDetail;
  const [view, setView] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [numInput, setNumInput] = useState(0);

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  const handleIncNum = () => {
    if (numInput >= 0) {
      setNumInput(numInput + 1);
    }
  };

  const handleDesNum = () => {
    if (numInput > 0) {
      setNumInput(numInput - 1);
    }
  };

  return (
    <div className={`${stylesGlobal.container1}`}>
      <div className={styles.displayGrid}>
        <div className={styles.wrapperImage} onClick={() => setPopUp(true)}>
          <figure className={styles.picProduct}>
            <Image src={_data.src} alt={_data.alt} />
          </figure>
          <i
            className={`fas fa-search  ${styles.searchIcon}`}
            onClick={() => setPopUp(true)}
          />
        </div>
        {popUp && (
          <div className={styles.popUpImage} onClick={() => setPopUp(false)}>
            <figure className={styles.picPopUp}>
              <Image src={_data.src} alt={_data.alt} />
            </figure>
            <i
              className='fa fa-times'
              aria-hidden='true'
              onClick={() => setPopUp(false)}
            />
            <i
              className={`fas fa-expand ${styles.iconFullScreen}`}
              onClick={() => toggleFullScreen()}
            />
          </div>
        )}
        <div className={styles.infoProduct}>
          <div className={styles.moneyStars}>
            <p className={styles.money}>$ {_data.money}</p>
            <div className={styles.stars}>
              {_data.numStars && <Stars numStars={_data.numStars} />}
            </div>
          </div>
          <p className={styles.content}>{_data.content}</p>
          <div className={styles.buy}>
            <div className={styles.input}>
              <p className={styles.inputNumber}>{numInput}</p>
              <span className={styles.inputInc} onClick={() => handleIncNum()}>
                <i className='fa fa-angle-up' aria-hidden='true' />
              </span>
              <span className={styles.inputDes} onClick={() => handleDesNum()}>
                <i className='fa fa-angle-down' aria-hidden='true' />
              </span>
            </div>
            <button className={`${stylesGlobal.button} ${styles.btnBuy}`}>
              BUY NOW
            </button>
          </div>
          <div className={styles.type}>
            <p className={styles.typeDetail}>
              <b>CATEGORIES:</b> {_data.categories}
            </p>
            <p className={styles.typeDetail}>
              <b>TAGS:</b> {_data.tags}
            </p>
            <p className={styles.typeDetail}>
              <b>PRODUCT ID:</b> {_data.productID}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.descriptionReviews}>
        <div className={styles.btn}>
          <div
            className={`${stylesGlobal.button2} ${styles.btnDescription} ${
              view && stylesGlobal.inActive
            }`}
            onClick={() => setView(!view)}
          >
            DESCRIPTION
          </div>
          <div
            className={`${stylesGlobal.button2} ${styles.btnReviews} ${
              !view && stylesGlobal.inActive
            }`}
            onClick={() => setView(!view)}
          >
            REVIEWS (1)
          </div>
        </div>
        {!view && (
          <p className={styles.contentDescription}>{_data.description}</p>
        )}
        {view && <ReviewsUser />}
      </div>
      <SectionTitle title={'Related products'} />
      <div className={styles.displayGrid4}>
        {_data.products.map((_data, index) => (
          <Product _data={_data} key={index} detail={false} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
