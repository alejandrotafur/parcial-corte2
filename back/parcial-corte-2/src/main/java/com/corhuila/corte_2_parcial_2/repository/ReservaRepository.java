package com.corhuila.corte_2_parcial_2.repository;

import com.corhuila.corte_2_parcial_2.models.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservaRepository extends JpaRepository<Reserva, Integer> {
    // Métodos adicionales de consulta, si es necesario
}
