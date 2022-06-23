import React, { createContext } from 'react';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import Product from '../../components/PageProduct/PageProduct';
import * as fs from 'fs';
import matter from 'gray-matter';

export const DetailShopContext = createContext();

export default function ProductPage({ frontMatter, markdown }) {
  return (
    <DetailShopContext.Provider value={{ frontMatter, markdown }}>
      <div className='productPage'>
        <Head>
          <title>Product</title>
        </Head>
        <Layout title={'Product'}>
          <Product />
        </Layout>
      </div>
    </DetailShopContext.Provider>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./content/shop/${slug}.md`, 'utf8'));
  let frontMatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontMatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./content/shop');

  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}
