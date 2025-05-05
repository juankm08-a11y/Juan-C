package com.red.social.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.red.social.model.Publicacion;
import com.red.social.repository.PublicacionRepository;

@Service
public class PublicacionService {

    private final PublicacionRepository repository;

    @Autowired
    public PublicacionService(PublicacionRepository repository) {
        this.repository = repository;
    }
    
    public List<Publicacion> listarTodas() {
        return repository.findAll();
    }

    public Optional<Publicacion> obtenerPorId(String id) {
        return repository.findById(id);
    }

    public Publicacion crear( Publicacion publicacion) {
        publicacion.setFechaCreacion(LocalDateTime.now());
        return repository.save(publicacion);
    }

    public Publicacion actualizar(String id, Publicacion datos) {
        return repository.findById(id)
            .map(pub->{
                pub.setContenido(datos.getContenido());
                return repository.save(pub);
            })
            .orElseThrow(() -> new RuntimeException("Publicacion no encontrada"));
    } 
    public void eliminar(String id) {
        repository.deleteById(id);
    }
}
