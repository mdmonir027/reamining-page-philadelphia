import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import ExportCustomToolbar from './CustomToolBar';

const rows = [];

const columns = [
  { field: 'user', headerName: 'User', width: 200, flex: 1 },
  { field: 'todo', headerName: 'Todo', width: 150, flex: 1 },
  { field: 'status', headerName: 'Status', width: 150, flex: 1 },
  { field: 'date', headerName: 'Date', width: 150, flex: 1 },

  {
    headerName: 'Actions',
    width: 200,
    flex: 1,
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

const Table = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(rows);
  }, []);

  return (
    <div
      style={{ height: data.length > 0 ? 700 : 220, width: '100%' }}
      className='mt-5'
    >
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        disableColumnMenu
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 30, 50]}
        pagination
        components={{ Toolbar: ExportCustomToolbar }}
        componentsProps={{ toolbar: { data, columns } }}
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Table;
