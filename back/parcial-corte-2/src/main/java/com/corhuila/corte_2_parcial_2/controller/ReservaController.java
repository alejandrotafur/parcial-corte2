package com.corhuila.corte_2_parcial_2.controller;

import java.util.List;
import java.util.Optional;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.corhuila.corte_2_parcial_2.models.Reserva;
import com.corhuila.corte_2_parcial_2.service.IReservaService;

@CrossOrigin(origins = "http://localhost:8100") // la app de Ionic corre en 8100 normalmente
@RestController
@RequestMapping("/api/reservas")
@Tag(name = "Reservas", description = "API para gestión de reservas") // Swagger: agrupación de endpoints
public class ReservaController {

    @Autowired
    private IReservaService reservaService;

    @Operation(summary = "Obtener todas las reservas")
    @GetMapping
    public List<Reserva> getAllReservas() {
        return reservaService.listarReservas();
    }

    @Operation(summary = "Obtener una reserva por ID")
    @GetMapping("/{id}")
    public Optional<Reserva> getReservaById(@PathVariable Integer id) {
        return reservaService.obtenerReservaPorId(id);
    }

    @Operation(summary = "Crear una nueva reserva")
    @PostMapping
    public Reserva createReserva(@RequestBody Reserva reserva) {
        return reservaService.guardarReserva(reserva);
    }

    @Operation(summary = "Actualizar una reserva existente")
    @PutMapping("/{id}")
    public Reserva updateReserva(@PathVariable Integer id, @RequestBody Reserva reserva) {
        reserva.setId(id);  // Aseguramos que el ID sea el correcto
        return reservaService.guardarReserva(reserva);
    }

    @Operation(summary = "Eliminar una reserva por ID")
    @DeleteMapping("/{id}")
    public void deleteReserva(@PathVariable Integer id) {
        reservaService.deleteReserva(id);
    }
}
