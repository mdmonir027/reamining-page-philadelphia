import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import * as React from 'react';

function CustomDatePicker({ value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} className='w-full'>
      <DatePicker
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
export default CustomDatePicker;
