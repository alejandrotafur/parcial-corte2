// src/components/DateTimeSelector.tsx
import React from 'react';

interface DateTimeSelectorProps {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTimeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateTimeSelector: React.FC<DateTimeSelectorProps> = ({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}) => {
  return (
    <div>
      <h3>Selecciona la fecha y hora de la reserva</h3>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={onDateChange}
        />
      </div>
      <div>
        <label htmlFor="time">Hora:</label>
        <input
          type="time"
          id="time"
          value={selectedTime}
          onChange={onTimeChange}
        />
      </div>
    </div>
  );
};

export default DateTimeSelector;
