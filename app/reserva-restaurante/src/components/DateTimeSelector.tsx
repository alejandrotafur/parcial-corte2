<<<<<<< HEAD
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
=======
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
>>>>>>> b72c3d0ea61470a2bbd991f570c781bde03bd195
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
<<<<<<< HEAD
          onChange={onDateChange}
=======
          onChange={handleDateChange}
>>>>>>> b72c3d0ea61470a2bbd991f570c781bde03bd195
        />
      </div>
      <div>
        <label htmlFor="time">Hora:</label>
        <input
          type="time"
          id="time"
          value={selectedTime}
<<<<<<< HEAD
          onChange={onTimeChange}
=======
          onChange={handleTimeChange}
>>>>>>> b72c3d0ea61470a2bbd991f570c781bde03bd195
        />
      </div>
    </div>
  );
};

export default DateTimeSelector;
<<<<<<< HEAD
=======

>>>>>>> b72c3d0ea61470a2bbd991f570c781bde03bd195
