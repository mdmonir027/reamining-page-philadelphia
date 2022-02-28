import React from 'react';

const TableHeading = ({ text }) => {
  return (
    <h2 className='text-center my-3 text-2xl border-b-2 border-gray-200 pb-3'>
      {text}
    </h2>
  );
};

export default TableHeading;
