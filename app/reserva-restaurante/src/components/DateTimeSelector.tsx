import React, { useState } from 'react';

const DateTimeSelector = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div>
      <h3>Selecciona la fecha y hora de la reserva</h3>
      <div>
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label htmlFor="time">Hora:</label>
        <input
          type="time"
          id="time"
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </div>
    </div>
  );
};

export default DateTimeSelector;

