import React from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className='border-b border-gray-200 pb-3'>
      <Link
        to={'/'}
        className='bg-blue-600 text-white px-3 py-2 rounded-md inline-block'
      >
        Add Analysis
      </Link>
    </div>
  );
};

export default TopHeader;
