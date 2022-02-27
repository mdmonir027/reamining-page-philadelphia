import React from 'react';
import HeaderTitle from './HeaderTitle';
import MilestoneTable from './MilestoneTable';

const Milestone = () => {
  return (
    <div className='mt-10'>
      <HeaderTitle text={'Milestone'} />
      <MilestoneTable />
    </div>
  );
};

export default Milestone;
