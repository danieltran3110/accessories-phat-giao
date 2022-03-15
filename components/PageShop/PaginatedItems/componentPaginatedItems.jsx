import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../../../styles/PageShop/PaginatedItems/componentPaginatedItems.module.scss';
import { dataProducts } from '../../../utils/data-config';
import Products from '../Products/componentProduct';


function PaginatedItems({ itemsPerPage }) {
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
      <Products currentItems={currentItems} />
      <ReactPaginate
        nextLabel='->'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='<-'
        pageClassName={`${styles.pageItem} ${styles.decoration}`}
        pageLinkClassName='page-link'
        previousClassName={styles.pageItem}
        previousLinkClassName='page-link'
        nextClassName={styles.pageItem}
        nextLinkClassName='page-link'
        breakLabel='...'
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