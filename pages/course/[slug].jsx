import React, { createContext } from 'react';
import Layout from '../../components/Layout/Layout';
import Course from '../../components/PageCourse/Course';
import * as fs from 'fs';
import matter from 'gray-matter';

export const DetailPostContext = createContext();

export default function PageCourse({ frontMatter, markdown }) {
  return (
    <DetailPostContext.Provider value={{ frontMatter, markdown }}>
      <div className='TeachingTrainingPage'>
        <Layout title={'Teaching&Training'}>
          <Course />
        </Layout>
      </div>
    </DetailPostContext.Provider>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./content/posts/${slug}.md`, 'utf8'));
  let frontMatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontMatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./content/posts');

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}