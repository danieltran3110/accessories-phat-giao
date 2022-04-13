import React from 'react';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import Product from '../../components/PageProduct/PageProduct';

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
