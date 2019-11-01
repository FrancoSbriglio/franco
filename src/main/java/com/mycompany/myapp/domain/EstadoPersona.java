package com.mycompany.myapp.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A EstadoPersona.
 */
@Entity
@Table(name = "estado_persona")
public class EstadoPersona implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre_estado_persona")
    private String nombreEstadoPersona;

    @ManyToMany(mappedBy = "personaEstados")
    @JsonIgnore
    private Set<Persona> estadoPersonas = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreEstadoPersona() {
        return nombreEstadoPersona;
    }

    public EstadoPersona nombreEstadoPersona(String nombreEstadoPersona) {
        this.nombreEstadoPersona = nombreEstadoPersona;
        return this;
    }

    public void setNombreEstadoPersona(String nombreEstadoPersona) {
        this.nombreEstadoPersona = nombreEstadoPersona;
    }

    public Set<Persona> getEstadoPersonas() {
        return estadoPersonas;
    }

    public EstadoPersona estadoPersonas(Set<Persona> personas) {
        this.estadoPersonas = personas;
        return this;
    }

    public EstadoPersona addEstadoPersona(Persona persona) {
        this.estadoPersonas.add(persona);
        persona.getPersonaEstados().add(this);
        return this;
    }

    public EstadoPersona removeEstadoPersona(Persona persona) {
        this.estadoPersonas.remove(persona);
        persona.getPersonaEstados().remove(this);
        return this;
    }

    public void setEstadoPersonas(Set<Persona> personas) {
        this.estadoPersonas = personas;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EstadoPersona)) {
            return false;
        }
        return id != null && id.equals(((EstadoPersona) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "EstadoPersona{" +
            "id=" + getId() +
            ", nombreEstadoPersona='" + getNombreEstadoPersona() + "'" +
            "}";
    }
}
