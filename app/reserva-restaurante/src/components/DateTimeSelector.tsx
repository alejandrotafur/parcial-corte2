import React, { useState, useEffect } from 'react';

interface DateTimeSelectorProps {
  onChange: (dateTime: string) => void;
}

const DateTimeSelector: React.FC<DateTimeSelectorProps> = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    if (selectedDate && selectedTime) {
      onChange(`${selectedDate} ${selectedTime}`);
    }
  }, [selectedDate, selectedTime, onChange]);

  return (
    <div>
      <h3>Selecciona la fecha y hora de la reserva</h3>
      <div>
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Hora:</label>
        <input
          type="time"
          id="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateTimeSelector;
