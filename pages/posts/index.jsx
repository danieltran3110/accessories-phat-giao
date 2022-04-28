import React from 'react';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import PagePosts from '../../components/PagePosts/PagePosts';
// import fs from 'fs';
// import matter from 'gray-matter';

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
//
// export async function getStaticProps() {
//   // List of files in blogs folder
//   const filesInBlogs = fs.readdirSync('./content/posts')
//
//   // Get the front matter and slug (the filename without .md) of all files
//   const posts = filesInBlogs.map(filename => {
//     const file = fs.readFileSync(`./content/posts/${filename}`, 'utf8')
//     const matterData = matter(file)
//
//     return {
//       ...matterData.data, // matterData.data contains front matter
//       slug: filename.slice(0, filename.indexOf('.'))
//     }
//   })
//
//   return {
//     props: {
//       posts
//     }
//   }
// }
//
