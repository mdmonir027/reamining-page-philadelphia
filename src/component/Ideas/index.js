import React from 'react';
import { Link } from 'react-router-dom';

const IdeasContainer = () => {
  return (
    <div className='p-4 m-4 bg-white border border-gray-100  rounded-md'>
      <div className='flex justify-between items-center'>
        <p className='text-xl'>Ideas</p>
        <Link
          to={'/'}
          className='px-4 py-2 border rounded-md  border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white'
        >
          Share Idea
        </Link>
      </div>
    </div>
  );
};

export default IdeasContainer;
