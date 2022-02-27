import { Button } from '@mui/material';
import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

const AddTaskContainer = () => {
  const [user, setUser] = useState(users[0].value);
  const [status, setStatus] = useState(allStatus[0].value);
  const [todo, setTodo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      user,
      status,
      todo,
    };
    console.log(data);
  };
  return (
    <div className='bg-white rounded-md p-4 '>
      <div>
        <h2 className='text-center my-3 text-2xl border-b-2 border-gray-200 pb-3'>
          Add Project
        </h2>
        <div className='flex justify-center'>
          <form className='w-full' onSubmit={submitHandler}>
            <div className='flex gap-3'>
              <div className='w-1/2'>
                <div className='my-2'>
                  <h2>User*</h2>
                  <CustomSelect
                    value={user}
                    data={users}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
              </div>
              <div className='w-1/2'>
                <div className='my-2'>
                  <h2>Status*</h2>
                  <CustomSelect
                    value={status}
                    data={allStatus}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className='my-2'>
              <h2>Todo</h2>
              <textarea
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className='w-full border rounded p-2 border-gray-400 outline-blue-500'
                rows={10}
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

export default AddTaskContainer;
const users = [
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
const allStatus = [
  { title: 'Carlos Abbott', value: 'Carlos Abbott' },
  { title: 'Miriam Wagner', value: 'Miriam Wagner' },
  { title: 'Bradley Wilkerson', value: 'Bradley Wilkerson' },
  { title: 'Virginia Andrews', value: 'Virginia Andrews' },
  { title: 'Kelly Snyder', value: 'Kelly Snyder' },
];
