import React, { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './PaginatedItems.module.scss';
import { dataProducts } from '../../../utils/data-config';
import Products from '../Products/Products';
import { ShopContext } from '../../../pages/shop';

function PaginatedItems({ itemsPerPage }) {
  const shop = useContext(ShopContext);
  const dataProducts = shop.shop;
  console.log(shop);
  const [view, setView] = useState(false);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(dataProducts);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(dataProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % dataProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.wrapperPaginate}>
      <div className={styles.view}>
        <div className={styles.icon}>
          <i
            className={`fa fa-th ${view && styles.blur}`}
            aria-hidden='true'
            onClick={() => setView(!view)}
          />
          <i
            className={`fa-solid fa-list ${!view && styles.blur}`}
            aria-hidden='true'
            onClick={() => setView(!view)}
          />
        </div>
        <div className={styles.selectSort}>
          <select
            name='SORT BY LATEST'
            id='lattes'
            className={styles.selectInner}
          >
            <option value='popularity'>SORT BY LATEST</option>
            <option value='popularity'>SORT BY POPULARITY</option>
            <option value='average'>SORT BY AVERAGE RATING</option>
            <option value='lth'>SORT BY PRICE: LOW TO HIGH</option>
            <option value='htl'>SORT BY PRICE: HIGH TO LOW</option>
          </select>
        </div>
      </div>
      {!view ? (
        <Products currentItems={currentItems} />
      ) : (
        <Products
          currentItems={currentItems}
          version2={true}
        />
      )}
      <ReactPaginate
        nextLabel='???'
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel='???'
        pageClassName={`${styles.pageItem} ${styles.decoration} `}
        pageLinkClassName='page-link'
        previousClassName={`${styles.pageItem} ${styles.iconLeft}`}
        previousLinkClassName={styles.pageLink}
        nextClassName={`${styles.pageItem} ${styles.iconRight}`}
        nextLinkClassName={styles.pageLink}
        breakLabel='/'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName={`${styles.pagination} `}
        activeClassName={styles.active}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default PaginatedItems;
