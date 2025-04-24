// src/services/reservationservice.ts
import axios from 'axios';

// URL base del backend
const API_URL = 'http://localhost:8081/api/reservas';

// Crear una nueva reserva
export const createReservation = async (reservationData: {
  fecha: string;
  hora: string;
  nombreCliente: string;
  contacto: string;
  numeroMesa: number;
}) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(API_URL, reservationData, config);
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'No se pudo conectar con el backend.';
    throw new Error(errorMessage);
  }
};

// Obtener todas las reservas
export const getAllReservations = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'No se pudo obtener las reservas.';
    throw new Error(errorMessage);
  }
};

// Obtener una reserva por ID
export const getReservationById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || `No se pudo obtener la reserva con ID: ${id}`;
    throw new Error(errorMessage);
  }
};

// Actualizar una reserva existente
export const updateReservation = async (id: number, reservationData: {
  fecha: string;
  hora: string;
  nombreCliente: string;
  contacto: string;
  numeroMesa: number;
}) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, reservationData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || `No se pudo actualizar la reserva con ID: ${id}`;
    throw new Error(errorMessage);
  }
};

// Eliminar una reserva por ID
export const deleteReservation = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return `Reserva con ID ${id} eliminada exitosamente.`;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || `No se pudo eliminar la reserva con ID: ${id}`;
    throw new Error(errorMessage);
  }
};
