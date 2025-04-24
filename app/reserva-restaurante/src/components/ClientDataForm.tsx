import React, { useState, useEffect } from 'react';

interface ClientDataFormProps {
  onChange: (name: string, contact: string) => void;
}

const ClientDataForm: React.FC<ClientDataFormProps> = ({ onChange }) => {
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');

  useEffect(() => {
    if (clientName && clientContact) {
      onChange(clientName, clientContact);
    }
  }, [clientName, clientContact, onChange]);

  return (
    <div>
      <h3>Ingrese los datos del cliente</h3>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="Nombre completo"
        />
      </div>
      <div>
        <label htmlFor="contact">Contacto:</label>
        <input
          type="text"
          id="contact"
          value={clientContact}
          onChange={(e) => setClientContact(e.target.value)}
          placeholder="Teléfono o Email"
        />
      </div>
    </div>
  );
};

export default ClientDataForm;
