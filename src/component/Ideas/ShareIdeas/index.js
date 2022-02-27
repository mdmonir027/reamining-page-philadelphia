import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
const ShareIdeasContainer = () => {
  const [department, setDepartment] = useState(departments[0].value);
  const [contributor, setContributor] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const data = { department, contributor };
    console.log(data);
  };
  return (
    <div>
      <div className='text-center mt-4 mb-6 border-b border-gray-200 pb-4'>
        <div className='w-20 h-20 rounded-md overflow-hidden ml-3'>
          <img
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
      </div>
      <form className='w-full' onSubmit={submitHandler}>
        <div className='my-2'>
          <h2 className=''>Contributor</h2>
          <TextField
            value={contributor}
            onChange={(e) => setContributor(e.target.value)}
            fullWidth
            size='small'
          />
        </div>
        <div className='flex gap-x-3 items-center'>
          <div className='my-2 w-1/2'>
            <h2 className='mb-1'>Department</h2>
            <CustomSelect
              value={department}
              data={departments}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div className='w-1/2'>
            <h2 className='mb-1'>File</h2>
            <div>
              <input type='file' name='' id='' />
            </div>
          </div>
        </div>

        <Button type='submit' variant='contained'>
          Post
        </Button>
      </form>
    </div>
  );
};

export default ShareIdeasContainer;
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
