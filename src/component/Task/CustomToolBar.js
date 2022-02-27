import { GridToolbarContainer } from '@mui/x-data-grid';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as React from 'react';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';

const CustomToolbar = ({ data, columns }) => {
  const downloadExcel = () => {
    const newData = data.map((row) => {
      delete row.id;
      return row;
    });

    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Projects');
    //Buffer
    XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' });
    //Binary string
    XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' });
    //Download
    XLSX.writeFile(workBook, 'Projects.xlsx');
  };
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text('Projects', 20, 10);
    doc.autoTable({
      theme: 'grid',
      columns: columns
        .filter((col) => col.headerName !== 'Actions')
        .map((col) => {
          return {
            title: col.headerName,
            dataKey: col.field,
          };
        }),
      body: data,
    });
    doc.save('Projects.pdf');
  };
  const csvReport = {
    data: data,
    headers: columns
      .filter((col) => col.headerName !== 'Actions')
      .map((col) => {
        return { label: col.headerName, key: col.field };
      }),
    filename: 'Projects.csv',
  };
  return (
    <GridToolbarContainer className='my-3 mx-3 justify-between'>
      <div className='flex rounded overflow-hidden'>
        <button className='border w-full px-4 py-2 text-sm'>Copy</button>
        <CSVLink {...csvReport} className='border w-full px-4 py-2 text-sm'>
          CSV
        </CSVLink>
        <button
          className='border w-full px-4 py-2 text-sm'
          onClick={downloadExcel}
        >
          Excel
        </button>
        <button
          className='border w-full px-4 py-2 text-sm'
          onClick={downloadPdf}
        >
          PDF
        </button>
        <button className='border w-full px-4 py-2 text-sm'>Print</button>
      </div>
      <div className='border rounded p-2 w-4/12'>
        <input
          type='search'
          name=''
          className='outline-none w-full'
          placeholder='Search here'
          id=''
        />
      </div>
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
