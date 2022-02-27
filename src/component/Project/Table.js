import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import ExportCustomToolbar from './CustomToolBar';

const rows = Array.from(Array(100).keys()).map((_, index) => {
  return {
    id: index + 1,
    name: 'Hello',
    createdBy: 'World',
    equipments: 'data',
    startDate: 'data',
    deadline: 'data',
    contributor: 'data',
    status: 'data',
    tags: 'data',
    requirements: 'data',
    addRequirements: 'data',
  };
});

const columns = [
  { field: 'name', headerName: 'Project Name', width: 150 },
  { field: 'createdBy', headerName: 'Created By', width: 150 },
  { field: 'equipments', headerName: 'Equipments', width: 150 },
  { field: 'startDate', headerName: 'Start Date', width: 150 },
  { field: 'deadline', headerName: 'Deadline', width: 150 },
  { field: 'contributor', headerName: 'Contributor', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'tags', headerName: 'Tags', width: 150 },
  { field: 'requirements', headerName: 'Requirements', width: 150 },
  { field: 'addRequirements', headerName: 'Add Requirements', width: 150 },
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

const Table = () => {
  const [pageSize, setPageSize] = React.useState(5);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(rows);
  }, []);

  return (
    <div
      style={{ height: pageSize > 15 ? 700 : 500, width: '100%' }}
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
        rowsPerPageOptions={[5, 10, 20, 30, 50]}
        pagination
        components={{ Toolbar: ExportCustomToolbar }}
        componentsProps={{ toolbar: { data, columns } }}
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Table;
