// src/services/ReservationService.ts

import axios from 'axios';

// URL del backend (puerto 8080 donde corre Spring Boot)
const API_URL = 'http://localhost:8081/api/reservas';

// Tipo de datos de la reserva esperados por el backend
export interface ReservaRequest {
  nombreCliente: string;
  contacto: string;
  fecha: string;
  hora: string;
  numeroMesa: number;
}

// Función para crear una nueva reserva
export const createReservation = async (reservaData: ReservaRequest) => {
  try {
    const response = await axios.post(API_URL, reservaData);
    return response.data;
  } catch (error) {
    console.error('Error creando la reserva:', error);
    throw error;
  }
};
