import React from 'react';
import Layout from '../../components/Layout/layout';
import Course from '../../components/PageCourse/Course';

export default function CoursePage() {
  return (
    <div className='TeachingTrainingPage'>
      <Layout title={'Teaching&Training'}>
        <Course />
      </Layout>
    </div>
  );
}