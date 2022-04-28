import fs from 'fs';
import matter from 'gray-matter';
import React, { createContext, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import PagePosts from '../../components/PagePosts/PagePosts';

export const PostContext = createContext();

export default function PostsPage({ posts }) {
  const [post, setPost] = useState(posts);

  return (
    <PostContext.Provider value={{ post, setPost }}>
      <div className='TeachingTrainingPage'>
        <Head>
          <title>All Posts</title>
        </Head>
        <Layout title={'All Posts'}>
          <PagePosts />
        </Layout>
      </div>
    </PostContext.Provider>

  );
}

export async function getStaticProps() {
  // List of files in blogs folder
  const filesInPosts = fs.readdirSync('./content/posts');

  // Get the front matter and slug (the filename without .md) of all files
  const posts = filesInPosts.map(filename => {
    const file = fs.readFileSync(`./content/posts/${filename}`, 'utf8');
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.')),
    };
  });

  return {
    props: {
      posts,
    },
  };
}