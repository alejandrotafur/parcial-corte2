package com.corhuila.corte_2_parcial_2.controller;

import java.util.List;
import java.util.Optional;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

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
    public ResponseEntity<List<Reserva>> getAllReservas() {
        List<Reserva> reservas = reservaService.listarReservas();
        if (reservas.isEmpty()) {
            return ResponseEntity.noContent().build();  // Retorna 204 si no hay reservas
        }
        return ResponseEntity.ok(reservas);  // Retorna 200 OK con la lista de reservas
    }

    @Operation(summary = "Obtener una reserva por ID")
    @GetMapping("/{id}")
    public ResponseEntity<Reserva> getReservaById(@PathVariable Integer id) {
        Optional<Reserva> reserva = reservaService.obtenerReservaPorId(id);
        return reserva.map(ResponseEntity::ok) // Si existe la reserva, retorna 200 OK con la reserva
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build()); // Si no, 404 NOT FOUND
    }

    @Operation(summary = "Crear una nueva reserva")
    @PostMapping
    public ResponseEntity<Reserva> createReserva(@Valid @RequestBody Reserva reserva) {
        // Si el número de mesa es null o inválido, se devuelve un error 400 Bad Request
        if (reserva.getNumeroMesa() == null || reserva.getNumeroMesa() <= 0) {
            return ResponseEntity.badRequest().body(null);  // Retorna un error 400 si el campo es null o inválido
        }

        Reserva nuevaReserva = reservaService.guardarReserva(reserva);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevaReserva);  // Retorna un código 201 (CREATED)
    }

    @Operation(summary = "Actualizar una reserva existente")
    @PutMapping("/{id}")
    public ResponseEntity<Reserva> updateReserva(@PathVariable Integer id, @Valid @RequestBody Reserva reserva) {
        if (!reservaService.obtenerReservaPorId(id).isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  // Retorna 404 si no existe la reserva
        }

        reserva.setId(id);  // Aseguramos que el ID sea el correcto
        Reserva updatedReserva = reservaService.guardarReserva(reserva);
        return ResponseEntity.ok(updatedReserva);  // Retorna el objeto actualizado con 200 OK
    }

    @Operation(summary = "Eliminar una reserva por ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReserva(@PathVariable Integer id) {
        Optional<Reserva> reserva = reservaService.obtenerReservaPorId(id);
        if (!reserva.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  // Retorna 404 si la reserva no existe
        }

        reservaService.deleteReserva(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();  // Retorna 204 si la eliminación fue exitosa
    }
}
