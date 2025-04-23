import React, { useState } from 'react';
import DateTimeSelector from '../components/DateTimeSelector';
import ClientDataForm from '../components/ClientDataForm';
import TableSelector from '../components/TableSelector';
import './Home.css'; // Importación del archivo CSS

const Home = () => {
  const [reservation, setReservation] = useState({
    dateTime: '',
    clientName: '',
    clientContact: '',
    table: '',
  });

  const handleReservationData = (data: Partial<typeof reservation>) => {
    setReservation((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleConfirm = () => {
    alert(`Reserva Confirmada:\n
    Fecha/Hora: ${reservation.dateTime}\n
    Cliente: ${reservation.clientName}\n
    Contacto: ${reservation.clientContact}\n
    Mesa: ${reservation.table}`);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Gestión de Reservas</h1>

      <section className="home-section">
        <DateTimeSelector
          onChange={(dateTime: string) =>
            handleReservationData({ dateTime })
          }
        />
      </section>

      <section className="home-section">
        <ClientDataForm
          onChange={(clientName: string, clientContact: string) =>
            handleReservationData({ clientName, clientContact })
          }
        />
      </section>

      <section className="home-section">
        <TableSelector
          onSelect={(table: string) => handleReservationData({ table })}
        />
      </section>

      <div className="home-button-container">
        <button className="home-button" onClick={handleConfirm}>
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
};

export default Home;
