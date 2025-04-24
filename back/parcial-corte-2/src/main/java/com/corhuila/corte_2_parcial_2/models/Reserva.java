package com.corhuila.corte_2_parcial_2.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "reservas")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "El nombre del cliente es obligatorio.")
    @Size(min = 1, message = "El nombre del cliente no puede estar vacío.")
    @Column(name = "nombre_cliente")
    private String nombreCliente;

    @NotNull(message = "El contacto es obligatorio.")
    @Size(min = 1, message = "El contacto no puede estar vacío.")
    private String contacto;

    @NotNull(message = "La fecha es obligatoria.")
    @Size(min = 1, message = "La fecha no puede estar vacía.")
    private String fecha;

    @NotNull(message = "La hora es obligatoria.")
    @Size(min = 1, message = "La hora no puede estar vacía.")
    private String hora;

    @NotNull(message = "El número de mesa es obligatorio.")
    private Integer numeroMesa;

    // Constructor por defecto
    public Reserva() {}

    // Constructor con parámetros
    public Reserva(String nombreCliente, String contacto, String fecha, String hora, Integer numeroMesa) {
        this.nombreCliente = nombreCliente;
        this.contacto = contacto;
        this.fecha = fecha;
        this.hora = hora;
        this.numeroMesa = numeroMesa;
    }

    // Getters y Setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombreCliente() {
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
    }

    public String getContacto() {
        return contacto;
    }

    public void setContacto(String contacto) {
        this.contacto = contacto;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public Integer getNumeroMesa() {
        return numeroMesa;
    }

    public void setNumeroMesa(Integer numeroMesa) {
        this.numeroMesa = numeroMesa;
    }

    // Método toString para imprimir la información de la reserva
    @Override
    public String toString() {
        return "Reserva{" +
                "id=" + id +
                ", nombreCliente='" + nombreCliente + '\'' +
                ", contacto='" + contacto + '\'' +
                ", fecha='" + fecha + '\'' +
                ", hora='" + hora + '\'' +
                ", numeroMesa=" + numeroMesa +
                '}';
    }
}
