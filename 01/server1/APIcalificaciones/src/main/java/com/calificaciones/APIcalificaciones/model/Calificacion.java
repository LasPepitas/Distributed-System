package com.calificaciones.APIcalificaciones.model;

import jakarta.persistence.*;

@Entity
@Table(name = "calificaciones")
public class Calificacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "codEst")
    private Integer codEst;

    @Column(name = "materia")
    private String materia;

    @Column(name = "calificacion")
    private int calificacion;

    // Getters y Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getCodEst() {
        return codEst;
    }

    public void setCodEst(Integer codEst) {
        this.codEst = codEst;
    }

    public String getMateria() {
        return materia;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }

    public int getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(int calificacion) {
        this.calificacion = calificacion;
    }
    @Override
    public String toString() {
        return "Calificacion [id=" + id + ", codEst=" + codEst +
                ", materia=" + materia + ", calificacion=" + calificacion + "]";
    }
}
