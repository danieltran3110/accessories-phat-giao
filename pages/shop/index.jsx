import Shop from '../../components/PageShop/Shop/componentShop';
import React from 'react';
import Layout from '../../components/Layout/layout';

export default function ShopPage() {
  return (
    <div className='shopPage'>
      <Layout>
        <Shop/>
      </Layout>
    </div>
  );
}
