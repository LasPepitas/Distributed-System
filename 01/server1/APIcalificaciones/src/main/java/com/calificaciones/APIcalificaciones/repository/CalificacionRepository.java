package com.calificaciones.APIcalificaciones.repository;

import com.calificaciones.APIcalificaciones.model.Calificacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalificacionRepository extends JpaRepository<Calificacion, Integer> {
}
