import React from 'react';

const TableHeader = () => {
  return (
    <div>
      <h2 className='text-center my-3 text-2xl border-b-2 border-gray-200 pb-3'>
        My Project Summary
      </h2>

      <div>
        <div className='flex justify-between rounded overflow-hidden mt-2'>
          <div className='border w-full p-4  text-center'>
            <p>0</p>
            <p className='text-gray-900'>Not Started</p>
          </div>
          <div className='border w-full p-4  text-center'>
            <p>0</p>
            <p className='text-gray-900'>In Progress</p>
          </div>
          <div className='border w-full p-4  text-center'>
            <p>0</p>
            <p className='text-yellow-500'>On Hold</p>
          </div>
          <div className='border w-full p-4  text-center'>
            <p>0</p>
            <p className='text-red-500'>Cancelled</p>
          </div>
          <div className='border w-full p-4  text-center'>
            <p>0</p>
            <p className='text-green-500'>Finish</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
