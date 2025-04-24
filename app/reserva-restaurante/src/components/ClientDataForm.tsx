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
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={clientName}
          onChange={onNameChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="contact">Contacto:</label>
        <input
          type="text"
          id="contact"
          value={clientContact}
          onChange={onContactChange}
        />
      </div>
    </div>
  );
};

export default ClientDataForm;
