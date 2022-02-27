import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const departments = [
  { title: 'Oliver Hansen', value: 'Oliver Hansen' },
  { title: 'Van Henry', value: 'Van Henry' },
  { title: 'April Tucker', value: 'April Tucker' },
  { title: 'Ralph Hubbard', value: 'Ralph Hubbard' },
  { title: 'Omar Alexander', value: 'Omar Alexander' },
  { title: 'Carlos Abbott', value: 'Carlos Abbott' },
  { title: 'Miriam Wagner', value: 'Miriam Wagner' },
  { title: 'Bradley Wilkerson', value: 'Bradley Wilkerson' },
  { title: 'Virginia Andrews', value: 'Virginia Andrews' },
  { title: 'Kelly Snyder', value: 'Kelly Snyder' },
];
const labs = [
  { title: 'Carlos Abbott', value: 'Carlos Abbott' },
  { title: 'Miriam Wagner', value: 'Miriam Wagner' },
  { title: 'Bradley Wilkerson', value: 'Bradley Wilkerson' },
  { title: 'Virginia Andrews', value: 'Virginia Andrews' },
  { title: 'Kelly Snyder', value: 'Kelly Snyder' },
];
const allStatus = [
  { title: 'Not Started', value: 1 },
  { title: 'In progress', value: 2 },
  { title: 'On Hold', value: 3 },
  { title: 'Cancelled', value: 4 },
  { title: 'Finished', value: 5 },
];

const AddGroupContainer = () => {
  const [groupName, setGroupName] = useState('');
  const [groupName2, setGroupName2] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      groupName,
      groupName2,
    };
    console.log(data);
  };
  return (
    <div className='bg-white rounded-md p-4 '>
      <div>
        <h2 className='text-left my-3 text-2xl border-b-2 border-gray-200 pb-3'>
          Add Group
        </h2>
        <div className='flex justify-center'>
          <form className='w-1/3' onSubmit={submitHandler}>
            <div className=' mt-1'>
              <h2 className='text-left mb-1'>Group Name</h2>
              <TextField
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                fullWidth
                size='small'
              />
            </div>
            <div className='mb-2'>
              {/* <h2 className='text-center'>Project Name</h2> */}
              <TextField
                value={groupName2}
                onChange={(e) => setGroupName2(e.target.value)}
                fullWidth
                size='small'
              />
            </div>
            <div className='flex justify-center'>
              <Button type='submit' variant='contained'>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGroupContainer;
