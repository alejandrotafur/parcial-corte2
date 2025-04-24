import React, { useState } from 'react';
import { createReservation } from '../services/reservationservice'; // Asegúrate de tener este servicio
import DateTimeSelector from '../components/DateTimeSelector';
import ClientDataForm from '../components/ClientDataForm';
import TableSelector from '../components/TableSelector';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [selectedTable, setSelectedTable] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !clientName || !clientContact || !selectedTable) {
      alert('Por favor complete todos los campos');
      return;
    }

    setLoading(true);
    setError(''); // Limpiar errores previos

    try {
      // Crea el objeto de la nueva reserva
      const newReservation = {
        fecha: selectedDate,
        hora: selectedTime,
        nombreCliente: clientName,
        contacto: clientContact,
        numeroMesa: parseInt(selectedTable.replace('Mesa ', ''), 10), // Extrae el número de la mesa
      };

      // Llamada al servicio de creación de la reserva
      const response = await createReservation(newReservation);

      // Si la reserva fue exitosa
      alert(`¡Reserva creada exitosamente para ${clientName}!`);
      console.log('Reserva guardada', response);
    } catch (error) {
      // Si hay un error, muestra el mensaje
      setError('No se pudo conectar con el backend. Intenta nuevamente más tarde.');
    } finally {
      setLoading(false); // Deshabilita el estado de carga
    }
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '50px auto',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Gestión de Reservas</h1>

      {/* Si hay un error, se muestra */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <section style={{ marginBottom: '20px' }}>
        <DateTimeSelector
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onDateChange={(e) => setSelectedDate(e.target.value)}
          onTimeChange={(e) => setSelectedTime(e.target.value)}
        />
      </section>

      <section style={{ marginBottom: '20px' }}>
        <ClientDataForm
          clientName={clientName}
          clientContact={clientContact}
          onNameChange={(e) => setClientName(e.target.value)}
          onContactChange={(e) => setClientContact(e.target.value)}
        />
      </section>

      <section style={{ marginBottom: '20px' }}>
        <TableSelector
          selectedTable={selectedTable}
          onTableSelect={(table) => setSelectedTable(table)}
        />
      </section>

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          display: 'block',
          width: '100%',
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Confirmando Reserva...' : 'Confirmar Reserva'}
      </button>
    </div>
  );
};

export default Home;

