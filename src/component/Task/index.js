import React from 'react';
import Table from './Table';
import TableHeader from './TableHeader';
// import TopHeader from './TopHeader';

const TaskContainer = () => {
  return (
    <div className='p-4 m-4 bg-white border border-gray-100  rounded-md'>
      {/* <TopHeader /> */}
      <TableHeader />
      <Table />
    </div>
  );
};

export default TaskContainer;
