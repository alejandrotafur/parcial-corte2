import React from 'react';

import TableSelector from '../components/TableSelector';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestión de Reservas</h1>

      <section>
        <TableSelector />
      </section>
    </div>
  );
};

export default Home;

