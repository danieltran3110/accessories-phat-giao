import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../../../styles/PageShop/PaginatedItems/componentPaginatedItems.module.scss';
import { dataProducts } from '../../../utils/data-config';
import Products from '../Products/componentProduct';
import ProductsV2 from '../ProductsV2/componentProductV2';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


function PaginatedItems({ itemsPerPage }) {

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
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(dataProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % dataProducts.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={styles.view}>
        <div className={styles.icon}>
          <i className={`fa fa-th-large ${view ? styles.blur : ''}`} aria-hidden='true'
             onClick={() => setView(!view)} />
          <i className={`fa fa-th-list ${!view ? styles.blur : ''}`} aria-hidden='true'
             onClick={() => setView(!view)} />
        </div>
        <FormControl className={styles.select} fullWidth>
          <InputLabel id='demo-simple-select-label'>SORT BY LATEST</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            // value={age}
            label='SORT BY LATEST'
            // onChange={handleChange}
          >
            <MenuItem value={10}>SORT BY POPULARITY</MenuItem>
            <MenuItem value={20}>SORT BY AVERAGE RATING</MenuItem>
            <MenuItem value={30}>SORT BY PRICE: LOW TO HIGH</MenuItem>
            <MenuItem value={40}>SORT BY PRICE: HIGH TO LOW</MenuItem>
          </Select>
        </FormControl>
      </div>
      {!view ? <Products currentItems={currentItems} /> : <ProductsV2 currentItems={currentItems} />}
      <ReactPaginate
        nextLabel='->'
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel='<-'
        pageClassName={`${styles.pageItem} ${styles.decoration}`}
        pageLinkClassName='page-link'
        previousClassName={styles.pageItem}
        previousLinkClassName='page-link'
        nextClassName={styles.pageItem}
        nextLinkClassName='page-link'
        breakLabel='/'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;