import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import CustomDatePicker from '../../shared/CustomDatePicker';
import CustomSelect from '../../shared/CustomSelect';

const AddProjectContainer = () => {
  const [department, setDepartment] = useState(departments[0].value);
  const [lab, setLab] = useState(labs[0].value);
  const [projectName, setProjectName] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [deadLineDate, setDeadLineDate] = useState('');
  const [status, setStatus] = useState('');
  const [contributor, setContributor] = useState('');
  const [tags, setTags] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      department,
      lab,
      projectName,
      createdBy,
      startDate,
      deadLineDate,
      status,
      contributor,
      tags,
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
          <form className='w-1/2' onSubmit={submitHandler}>
            <div className='text-center my-2'>
              <h2 className='text-center'>Department</h2>
              <CustomSelect
                value={department}
                data={departments}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className='text-center my-2'>
              <h2 className='text-center'>Project Name</h2>
              <TextField
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                fullWidth
                size='small'
              />
            </div>
            <div className='text-center my-2'>
              <h2 className='text-center'>Created By</h2>
              <TextField
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
                fullWidth
                size='small'
              />
            </div>
            <div className='text-center my-2'>
              <h2 className='text-center'>Lab*</h2>
              <CustomSelect
                value={lab}
                data={labs}
                onChange={(e) => setLab(e.target.value)}
              />
            </div>
            <div className='flex my-2'>
              <div className='text-center w-1/2'>
                <h2 className='text-center'>Start Date</h2>
                <CustomDatePicker
                  value={startDate}
                  onChange={(value) => setStartDate(value)}
                />
              </div>
              <div className='text-center w-1/2'>
                <h2 className='text-center'>Deadline</h2>
                <CustomDatePicker
                  value={deadLineDate}
                  onChange={(value) => setDeadLineDate(value)}
                />
              </div>
            </div>
            <div className='text-center my-2'>
              <h2 className='text-center'>Contributor</h2>
              <TextField
                value={contributor}
                onChange={(e) => setContributor(e.target.value)}
                fullWidth
                size='small'
              />
            </div>
            <div className='text-center my-2'>
              <h2 className='text-center'>Status</h2>
              <CustomSelect
                value={status}
                data={allStatus}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className='text-center my-2'>
              <h2 className='text-center'>Contributor</h2>
              <textarea
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                multiline
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

export default AddProjectContainer;
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
