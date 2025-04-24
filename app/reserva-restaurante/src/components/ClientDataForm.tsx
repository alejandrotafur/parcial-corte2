<<<<<<< HEAD
// src/components/ClientDataForm.tsx
import React from 'react';

interface ClientDataFormProps {
  clientName: string;
  clientContact: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContactChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ClientDataForm: React.FC<ClientDataFormProps> = ({
  clientName,
  clientContact,
  onNameChange,
  onContactChange
}) => {
  return (
    <div>
      <h3>Ingrese los datos del cliente</h3>
      <div style={{ marginBottom: '10px' }}>
=======
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
>>>>>>> b72c3d0ea61470a2bbd991f570c781bde03bd195
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={clientName}
<<<<<<< HEAD
          onChange={onNameChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="contact">Contacto:</label>
=======
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="contact">Contacto (Teléfono/Email):</label>
>>>>>>> b72c3d0ea61470a2bbd991f570c781bde03bd195
        <input
          type="text"
          id="contact"
          value={clientContact}
<<<<<<< HEAD
          onChange={onContactChange}
=======
          onChange={handleContactChange}
>>>>>>> b72c3d0ea61470a2bbd991f570c781bde03bd195
        />
      </div>
    </div>
  );
};

export default ClientDataForm;
