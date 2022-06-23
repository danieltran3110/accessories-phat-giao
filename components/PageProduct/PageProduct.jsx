import React, { useState, useContext } from 'react';
import styles from './PageProduct.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';
import { dataProductDetail } from '../../utils/data-config';
import RelatedProduct from './Components/RelatedProduct/RelatedProduct';
import DescriptionReview from './Components/DescriptionReview/DescriptionReview';
import PopUpImage from './Components/PopUpImage/PopUpImage';
import InfoProduct from './Components/InfoProduct/InfoProduct';
import ImageProduct from './Components/ImageProduct/ImageProduct';
import { DetailShopContext } from '../../pages/product/[slug]';

const ProductDetail = () => {
  const detailShop = useContext(DetailShopContext);
  const _data = detailShop.frontMatter;
  const _dataMarkdown = detailShop.markdown;
  const [popUp, setPopUp] = useState(false);

  const showPopUp = () => {
    setPopUp(!popUp);
  };

  return (
    <div className={`${stylesGlobal.container1}`}>
      <div className={styles.displayGrid}>
        <ImageProduct
          _data={_data}
          showPopUp={showPopUp}
        />
        {popUp && (
          <PopUpImage
            _data={_data}
            showPopUp={showPopUp}
          />
        )}
        <InfoProduct _data={_data} />
      </div>
      <DescriptionReview _data={_dataMarkdown} />
      {_data.products && <RelatedProduct _data={_data} />}
    </div>
  );
};

export default ProductDetail;
