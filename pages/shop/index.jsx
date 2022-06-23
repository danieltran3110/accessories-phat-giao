import PageShop from '../../components/PageShop/PageShop.jsx';
import fs from 'fs';
import matter from 'gray-matter';
import React, { createContext, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';

export const ShopContext = createContext();

export default function ShopPage({ shops }) {
  const [shop, setShop] = useState(shops);

  return (
    <ShopContext.Provider value={{ shop, setShop }}>
      <div className='shopPage'>
        <Head>
          <title>Shop</title>
        </Head>
        <Layout title={'PageShop'}>
          <PageShop />
        </Layout>
      </div>
    </ShopContext.Provider>
  );
}

export async function getStaticProps() {
  // List of files in blogs folder
  const filesInShop = fs.readdirSync('./content/shop');

  // Get the front matter and slug (the filename without .md) of all files
  const shops = filesInShop.map(filename => {
    const file = fs.readFileSync(`./content/shop/${filename}`, 'utf8');
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.')),
    };
  });

  return {
    props: {
      shops,
    },
  };
}
