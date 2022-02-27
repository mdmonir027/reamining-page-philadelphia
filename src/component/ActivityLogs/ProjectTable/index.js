import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';

const rows = [];

const columns = [
  { field: 'name', headerName: 'Project', width: 150, flex: 1 },
  { field: 'users', headerName: 'Users', width: 150, flex: 1 },
  { field: 'roles', headerName: 'Roles', width: 150, flex: 1 },
  { field: 'expireDate', headerName: 'Expire Date', width: 150, flex: 1 },
  {
    headerName: 'Actions',
    width: 200,
    renderCell: () => {
      return (
        <div className='flex gap-x-1'>
          <button className='bg-purple-500 text-white px-2 py-1 rounded'>
            Edit
          </button>
          <button className='bg-green-500 text-white px-2 py-1 rounded'>
            Active
          </button>
          <button className='bg-red-500 text-white px-2 py-1 rounded'>
            Delete
          </button>
        </div>
      );
    },
  },
];

const ProjectTable = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(rows);
  }, []);

  return (
    <div
      style={{ height: data.length > 0 ? 700 : 200, width: '100%' }}
      className='mt-5'
    >
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        checkboxSelection
        disableColumnMenu
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 30, 50]}
        pagination
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default ProjectTable;
