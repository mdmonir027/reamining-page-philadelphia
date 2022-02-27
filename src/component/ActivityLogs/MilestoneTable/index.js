import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';

const rows = [];

const columns = [
  { field: 'assignedTo', headerName: 'Assigned To', width: 150, flex: 1 },
  { field: 'tags', headerName: 'Tags', width: 150, flex: 1 },
  { field: 'startDate', headerName: 'Start Date', width: 150, flex: 1 },
  { field: 'dueDate', headerName: 'Due Date', width: 150, flex: 1 },
  { field: 'priority', headerName: 'Priority', width: 150, flex: 1 },
  { field: 'status', headerName: 'Status', width: 150, flex: 1 },
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

const MilestoneTable = () => {
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

export default MilestoneTable;
