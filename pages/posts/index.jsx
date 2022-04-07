import React from 'react';
import Layout from '../../components/Layout/layout';
import Head from 'next/head';
import PagePosts from '../../components/PagePosts/PagePosts';

export default function PostsPage() {
  return (
    <div className='TeachingTrainingPage'>
      <Head>
        <title>All Posts</title>
      </Head>
      <Layout title={'All Posts'}>
        <PagePosts />
      </Layout>
    </div>
  );
}
