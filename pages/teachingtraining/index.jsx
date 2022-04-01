import React from 'react';
import Layout from '../../components/Layout/layout';
import TeachingTraining from '../../components/PageTeachingTraining/TeachingTraining';
import Head from 'next/head';

export default function TeachingTrainingPage() {
  return (
    <div className='TeachingTrainingPage'>
      <Head>
        <title>Teaching&Training</title>
      </Head>
      <Layout title={'Teaching&Training'}>
        <TeachingTraining />
      </Layout>
    </div>
  );
}
