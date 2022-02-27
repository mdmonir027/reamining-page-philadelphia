import { Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

const AddAnalysisContainer = () => {
  const [department, setDepartment] = useState(departments[0].value);
  const [lab, setLab] = useState(labs[0].value);
  const [project, setProject] = useState(allProjects[0].value);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [accreditation, setAccreditation] = useState('');
  const [contributors, setContributors] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      department,
      lab,
      projectName: project,
      createdBy: name,

      contributor: description,
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
            <div className='my-2'>
              <h2>Department</h2>
              <CustomSelect
                value={department}
                data={departments}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className='my-2'>
              <h2>Lab*</h2>
              <CustomSelect
                value={lab}
                data={labs}
                onChange={(e) => setLab(e.target.value)}
              />
            </div>
            <div className='my-2'>
              <h2>Project</h2>
              <CustomSelect
                value={project}
                data={allProjects}
                onChange={(e) => setProject(e.target.value)}
              />
            </div>
            <div className='my-2'>
              <h2>Name</h2>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                size='small'
              />
            </div>

            <div className='my-2'>
              <h2>Description</h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='w-full border rounded p-2 border-gray-400 outline-blue-500'
                rows={10}
              />
            </div>

            <div className='my-2'>
              <h2>Contributors</h2>
              <Autocomplete
                multiple
                options={top100Films}
                getOptionLabel={(option) => option.title}
                value={contributors}
                defaultValue={[]}
                filterSelectedOptions
                onChange={(event, value) => setContributors(value)}
                size='small'
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div className='my-2'>
              <h2>Accreditation</h2>
              <TextField
                value={accreditation}
                onChange={(e) => setAccreditation(e.target.value)}
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

export default AddAnalysisContainer;
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
const allProjects = [
  { title: 'Carlos Abbott', value: 'Carlos Abbott' },
  { title: 'Miriam Wagner', value: 'Miriam Wagner' },
  { title: 'Bradley Wilkerson', value: 'Bradley Wilkerson' },
  { title: 'Virginia Andrews', value: 'Virginia Andrews' },
  { title: 'Kelly Snyder', value: 'Kelly Snyder' },
];

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
];
