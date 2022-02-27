import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import ExportCustomToolbar from './CustomToolBar';

const rows = [];

const columns = [
  { field: 'name', headerName: 'Group Name', width: 150, flex: 1 },
  { field: 'members', headerName: 'Members', width: 150, flex: 1 },
  { field: 'delete', headerName: 'Delete', width: 150, flex: 1 },
];

const Table = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(rows);
  }, []);

  return (
    <div
      style={{
        height: data.length > 0 ? 700 : 220,
        width: '100%',
      }}
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
