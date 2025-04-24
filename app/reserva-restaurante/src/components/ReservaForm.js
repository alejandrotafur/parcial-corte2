import React, { useState } from 'react';
import axios from 'axios';

const ReservaForm = () => {
  const [contacto, setContacto] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [nombreCliente, setNombreCliente] = useState('');
  const [numeroMesa, setNumeroMesa] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    const reserva = {
      contacto,
      fecha,
      hora,
      nombre_cliente: nombreCliente,
      numero_mesa: numeroMesa,
    };

    axios.post('http://localhost:8081/api/reservas', reserva)
      .then(response => {
        console.log('Reserva guardada con éxito', response.data);
      })
      .catch(error => {
        console.error('Error al guardar la reserva', error);
      });
  };

  return (
    <div>
      <h2>Formulario de Reserva</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contacto:</label>
          <input
            type="text"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Hora:</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nombre del Cliente:</label>
          <input
            type="text"
            value={nombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Número de Mesa:</label>
          <input
            type="number"
            value={numeroMesa}
            onChange={(e) => setNumeroMesa(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

export default ReservaForm;

