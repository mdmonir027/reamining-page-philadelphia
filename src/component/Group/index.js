import React from 'react';
import TableHeading from '../shared/TableHeading';
import Table from './Table';

const GroupContainer = () => {
  return (
    <div className='p-4 m-4 bg-white border border-gray-100  rounded-md'>
      <TableHeading text={'My Project Summary'} />
      <Table />
    </div>
  );
};

export default GroupContainer;
