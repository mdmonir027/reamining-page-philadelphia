import React from 'react';
import TableHeading from '../shared/TableHeading';

const TableHeader = () => {
  return (
    <div>
      <TableHeading text={'My Project Summary'} />
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
