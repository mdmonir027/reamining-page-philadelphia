import React from 'react';
import Table from './Table';
import TableHeader from './TableHeader';

const GroupContainer = () => {
  return (
    <div className='p-4 m-4 bg-white border border-gray-100  rounded-md'>
      <TableHeader />
      <Table />
    </div>
  );
};

export default GroupContainer;
