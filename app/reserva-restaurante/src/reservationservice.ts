// src/services/reservationservice.ts
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/reservas';  // URL del backend

// Crear una nueva reserva
export const createReservation = async (reservationData: {
  date: string;
  time: string;
  clientName: string;
  clientContact: string;
  table: string;
}) => {
  try {
    const response = await axios.post(API_URL, reservationData);
    return response.data;  // Devuelve la respuesta del backend
  } catch (error) {
    throw new Error('No se pudo conectar con el backend. Intenta nuevamente más tarde.');
  }
};
