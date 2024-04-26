import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';

const DataTable = ({ data, onDataChange }) => {
  const [filteredData, setFilteredData] = useState(data.map((item, index) => ({ ...item, id: index })));
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    setFilteredData(data.map((item, index) => ({ ...item, id: index })));
  }, [data]);

  const handleDeleteSelectedRows = () => {
    const confirmed = window.confirm("Are you sure you want to delete the selected rows?");
    if (confirmed) {
      const newData = filteredData.filter((row) => !selectedRows.includes(row.id));
      setFilteredData(newData);
      onDataChange(newData); // Update the parent component with the new data
      setSelectedRows([]);
    }
  };

  const handleRowSelect = ({ id }, isSelected) => {
    if (isSelected) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  };

  const handleCellSave = (oldValue, newValue, row, column) => {
    const updatedData = filteredData.map((item) =>
      item.id === row.id ? { ...item, [column.dataField]: newValue } : item
    );
    onDataChange(updatedData); // Save the changes by updating the parent component's data
  };

  const columns = Object.keys(data[0]).map((key) => ({
    dataField: key,
    text: key,
    sort: true,
    filter: textFilter(),
  }));

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = data.filter((row) =>
      Object.values(row).some(
        (value) => value && value.toString().toLowerCase().includes(keyword)
      )
    );
    setFilteredData(filtered);
  };

  const selectRow = {
    mode: 'checkbox',
    onSelect: handleRowSelect,
    onSelectAll: (isSelected) => {
      if (isSelected) {
        setSelectedRows(filteredData.map((row) => row.id));
      } else {
        setSelectedRows([]);
      }
    },
    selected: selectedRows,
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="form-control mb-2"
      />
      <button onClick={handleDeleteSelectedRows} className="btn btn-danger mb-2">Delete Selected</button>
      <BootstrapTable
        keyField="id"
        data={filteredData}
        columns={columns}
        filter={filterFactory()}
        pagination={paginationFactory()}
        selectRow={selectRow}
        cellEdit={cellEditFactory({
          mode: 'click',
          blurToSave: true,
          afterSaveCell: handleCellSave, // Call handleCellSave when a cell is saved
        })}
      />
    </div>
  );
};

export default DataTable;
