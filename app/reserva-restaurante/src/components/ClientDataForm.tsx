import React, { useState } from 'react';

const ClientDataForm = () => {
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientContact(e.target.value);
  };

  return (
    <div>
      <h3>Ingrese los datos del cliente</h3>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={clientName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="contact">Contacto (Teléfono/Email):</label>
        <input
          type="text"
          id="contact"
          value={clientContact}
          onChange={handleContactChange}
        />
      </div>
    </div>
  );
};

export default ClientDataForm;
