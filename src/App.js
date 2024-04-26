import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from './DataTable';
import * as XLSX from 'xlsx';

const App = () => {
  const [excelData, setExcelData] = useState([]);
  const [changesSaved, setChangesSaved] = useState(true); // Track whether changes are saved

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const file = await fetch('/pod-data.xlsx');
      const blob = await file.blob();
      const reader = new FileReader();
      reader.onload = () => {
        const data = new Uint8Array(reader.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 0 });
        setExcelData(parsedData.map((item, index) => ({ ...item, id: index }))); // Add IDs to the data
      };
      reader.readAsArrayBuffer(blob);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteRow = (rowId) => {
    const newData = excelData.filter((row) => row.id !== rowId);
    setExcelData(newData.map((item, index) => ({ ...item, id: index }))); // Update IDs after deletion
    setChangesSaved(false); // Mark changes as not saved
  };

  const handleSaveChanges = () => {
    saveChangesToExcel(excelData); // Call saveChangesToExcel with current data
    setChangesSaved(true); // Mark changes as saved
  };

  const saveChangesToExcel = (updatedData) => {
    const worksheet = XLSX.utils.json_to_sheet(updatedData);
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, worksheet, 'Sheet1');
    XLSX.writeFile(newWorkbook, 'updated-pod-data.xlsx');
  };

  const handleDataChange = (newData) => {
    setExcelData(newData);
    setChangesSaved(false); // Mark changes as not saved
  };

  return (
    <div className="container mt-5">
      <h1> Waste Management Dashboard: Visualizing Waste Collection Data</h1>
      {excelData.length > 0 ? (
        <>
          {!changesSaved && ( // Display save changes button only when changes are not saved
            <button onClick={handleSaveChanges} className="btn btn-primary mb-3">
              Save Changes to Excel
            </button>
          )}
          <DataTable data={excelData} onDataChange={handleDataChange} deleteRow={handleDeleteRow} />
        </>
      ) : (
        <p>No data found. Please upload an Excel file.</p>
      )}
    </div>
  );
};

export default App;
