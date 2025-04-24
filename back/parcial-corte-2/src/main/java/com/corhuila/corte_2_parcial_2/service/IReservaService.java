package com.corhuila.corte_2_parcial_2.service;

import java.util.List;
import java.util.Optional;

import com.corhuila.corte_2_parcial_2.models.Reserva;

public interface IReservaService {

    // Listar todas las reservas
    List<Reserva> listarReservas();

    // Obtener una reserva por ID, lanzará una excepción si no se encuentra
    Optional<Reserva> obtenerReservaPorId(Integer id);

    // Guardar una nueva reserva (crear o actualizar)
    Reserva guardarReserva(Reserva reserva);

    // Eliminar una reserva por ID
    void deleteReserva(Integer id);
}
