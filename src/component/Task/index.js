import React from 'react';
import TableHeading from '../shared/TableHeading';
import Table from './Table';
// import TopHeader from './TopHeader';

const TaskContainer = () => {
  return (
    <div className='p-4 m-4 bg-white border border-gray-100  rounded-md'>
      {/* <TopHeader /> */}
      <TableHeading text={'Analysis List'} />
      <Table />
    </div>
  );
};

export default TaskContainer;
