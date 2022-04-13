import PageShop from '../../components/PageShop/PageShop.jsx';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';

export default function ShopPage() {

  return (
    <div className='shopPage'>
      <Head>
        <title>Shop</title>
      </Head>
      <Layout title={'PageShop'}>
        <PageShop/>
      </Layout>
    </div>
  );
}
