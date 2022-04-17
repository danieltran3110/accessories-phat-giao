import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import BoxFormik from '../../../Formik/Formik';

const BoxComment = () => {

  return (
    <>
      <SectionTitle title={'Add Your Comment'} left={true} />
      <BoxFormik />
    </>
  );
};

export default BoxComment;
