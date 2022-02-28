import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
function CustomSelect({ value = '', onChange, data = [] }) {
  return (
    <>
      <FormControl
        fullWidth
        variant='outlined'
        sx={{ minWidth: 120 }}
        size='small'
      >
        <Select value={value} onChange={onChange}>
          {data.map((item) => (
            <MenuItem key={Math.random()} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default CustomSelect;
