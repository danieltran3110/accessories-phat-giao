import React from 'react';
import Layout from '../../components/Layout/layout';
import Head from 'next/head';
import Product from '../../components/ProductPage/ProductPage';

export default function ProductPage() {
  return (
    <div className='productPage'>
      <Head>
        <title>Product</title>
      </Head>
      <Layout title={'Product'}>
        <Product />
      </Layout>
    </div>
  );
}
