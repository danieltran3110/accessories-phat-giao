import Shop from '../../components/PageShop/componentShop.jsx';
import React from 'react';
import Layout from '../../components/Layout/layout';
import Head from 'next/head';

export default function ShopPage() {

  return (
    <div className='shopPage'>
      <Head>
        <title>Shop</title>
      </Head>
      <Layout title={'Shop'}>
        <Shop/>
      </Layout>
    </div>
  );
}
