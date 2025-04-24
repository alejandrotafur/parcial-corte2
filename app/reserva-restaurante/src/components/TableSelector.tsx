// src/components/TableSelector.tsx
import React from 'react';

interface TableSelectorProps {
  selectedTable: string;
  onTableSelect: (table: string) => void;
}

const TableSelector: React.FC<TableSelectorProps> = ({
  selectedTable,
  onTableSelect
}) => {
  const tables = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4'];

  return (
    <div>
      <h3>Selecciona una mesa disponible</h3>
      <div style={{ marginBottom: '10px' }}>
        {tables.map((table, index) => (
          <button
            key={index}
            onClick={() => onTableSelect(table)}
            style={{
              margin: '5px',
              padding: '8px 15px',
              backgroundColor: selectedTable === table ? 'green' : '#e0e0e0',
              color: selectedTable === table ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {table}
          </button>
        ))}
      </div>
      <p>Mesa seleccionada: {selectedTable || 'Ninguna'}</p>
    </div>
  );
};

export default TableSelector;
