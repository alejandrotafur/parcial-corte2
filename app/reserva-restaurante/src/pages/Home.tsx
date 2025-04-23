import React from 'react';
import DateTimeSelector from '../components/DateTimeSelector';
import ClientDataForm from '../components/ClientDataForm';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestión de Reservas</h1>

      <section style={{ marginBottom: '20px' }}>
        <DateTimeSelector />
      </section>

      <section>
        <ClientDataForm />
      </section>
    </div>
  );
};

export default Home;
