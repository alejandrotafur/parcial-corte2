import React, { useState } from 'react'; 
import DateTimeSelector from '../components/DateTimeSelector';
import ClientDataForm from '../components/ClientDataForm';
import TableSelector from '../components/TableSelector';
import { createReservation } from '../services/ReservationService'; // Servicio acoplado
import './Home.css'; // Estilos

const Home = () => {
  const [reservation, setReservation] = useState({
    dateTime: '',           // Este campo contendrá fecha y hora en un solo string
    clientName: '',
    clientContact: '',
    table: '',              // Ejemplo: 'Mesa 1'
  });

  const handleReservationData = (data: Partial<typeof reservation>) => {
    setReservation((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleConfirm = async () => {
    try {
      // Separar fecha y hora del campo dateTime si vienen juntos
      const dateTimeParts = reservation.dateTime.split('T');
      const fecha = dateTimeParts[0];
      const hora = dateTimeParts[1] || '00:00';

      // Extraer el número de mesa desde el string "Mesa 1"
      const numeroMesa = parseInt(reservation.table.replace('Mesa ', ''), 10);

      const nuevaReserva = {
        nombreCliente: reservation.clientName,
        contacto: reservation.clientContact,
        fecha: fecha,
        hora: hora,
        numeroMesa: numeroMesa
      };

      const response = await createReservation(nuevaReserva);
      console.log('Reserva creada:', response);
      alert(`¡Reserva creada exitosamente para ${reservation.clientName}!`);

      // Limpiar los datos después de confirmar
      setReservation({
        dateTime: '',
        clientName: '',
        clientContact: '',
        table: '',
      });

    } catch (error) {
      console.error('Error al confirmar reserva', error);
      alert('Error al crear la reserva. Inténtalo de nuevo.');
    }
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
