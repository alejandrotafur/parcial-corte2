package com.corhuila.corte_2_parcial_2.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "reservas")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombreCliente;

    private String contacto;

    private String fecha;

    private String hora;

    private Integer numeroMesa;

    public Reserva() {
    }

    public Reserva(String nombreCliente, String contacto, String fecha, String hora, Integer numeroMesa) {
        this.nombreCliente = nombreCliente;
        this.contacto = contacto;
        this.fecha = fecha;
        this.hora = hora;
        this.numeroMesa = numeroMesa;
    }

    // Getters y setters

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
