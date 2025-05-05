package com.red.social.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;

@Document(collection = "publicaciones")
public class Publicacion {

    @Id
    private String id;

    @NotBlank
    private String contenido;

    private String autorId;

    private LocalDateTime fechaCreacion;

    public Publicacion() {} 

    public Publicacion(String contenido, String autorId) {
        this.contenido = contenido;
        this.autorId = autorId;
        this.fechaCreacion = LocalDateTime.now();
    }

    public String getId() {return id;}
    public void setId(String id) {this.id = id;}

    public String getContenido() {return contenido;}
    public void setContenido(String contenido) {this.contenido = contenido;}

    public String getAutorId() {return autorId;}
    public void setAutorId(String autorId) {this.autorId = autorId;}

    public LocalDateTime getFechaCreaction() {return fechaCreacion;}
    public void setFechaCreacion(LocalDateTime fechaCreacion) {this.fechaCreacion = fechaCreacion;}

}
