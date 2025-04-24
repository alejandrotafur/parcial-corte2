package com.corhuila.corte_2_parcial_2.service;

import com.corhuila.corte_2_parcial_2.models.Reserva;
import com.corhuila.corte_2_parcial_2.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaServiceImpl implements IReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    @Override
    public List<Reserva> listarReservas() {
        return reservaRepository.findAll();  // Lista todas las reservas
    }

    @Override
    public Optional<Reserva> obtenerReservaPorId(Integer id) {
        return reservaRepository.findById(id);  // Encuentra una reserva por ID
    }

    @Override
    public Reserva guardarReserva(Reserva reserva) {
        return reservaRepository.save(reserva);  // Guarda o actualiza una reserva
    }

    @Override
    public void deleteReserva(Integer id) {
        reservaRepository.deleteById(id);  // Elimina una reserva por ID
    }
}
