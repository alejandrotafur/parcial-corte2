import React, { useState, useEffect } from 'react';

interface TableSelectorProps {
  onSelect: (table: string) => void;
}

const TableSelector: React.FC<TableSelectorProps> = ({ onSelect }) => {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  const availableTables = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4'];

  useEffect(() => {
    if (selectedTable) {
      onSelect(selectedTable);
    }
  }, [selectedTable, onSelect]);

  const handleSelect = (table: string) => {
    setSelectedTable(table);
  };

  return (
    <div>
      <h3>Selecciona una mesa disponible</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {availableTables.map((table) => (
          <button
            key={table}
            onClick={() => handleSelect(table)}
            style={{
              padding: '10px 20px',
              backgroundColor: selectedTable === table ? '#4CAF50' : '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {table}
          </button>
        ))}
      </div>
      {selectedTable && <p>Mesa seleccionada: {selectedTable}</p>}
    </div>
  );
};

export default TableSelector;
