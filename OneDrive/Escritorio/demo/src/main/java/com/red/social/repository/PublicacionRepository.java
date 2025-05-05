package com.red.social.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.red.social.model.Publicacion;
import java.util.List;


public interface PublicacionRepository extends MongoRepository<Publicacion, String> {
    List<Publicacion> findByAutorId(String autorId);
}
