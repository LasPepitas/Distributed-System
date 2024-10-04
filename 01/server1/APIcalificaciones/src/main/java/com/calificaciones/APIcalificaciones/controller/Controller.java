package com.calificaciones.APIcalificaciones.controller;

import com.calificaciones.APIcalificaciones.model.Calificacion;
import com.calificaciones.APIcalificaciones.repository.CalificacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api")
public class Controller {

    @Autowired
    private CalificacionRepository calificacionRepository;

    @GetMapping("/calificaciones")
    public List<Calificacion> getCalificaciones() {
        return calificacionRepository.findAll();
    }

    @PostMapping("/calificaciones")
    public Calificacion addCalificacion(@RequestBody Calificacion calificacion) {
        return calificacionRepository.save(calificacion);
    }
}
