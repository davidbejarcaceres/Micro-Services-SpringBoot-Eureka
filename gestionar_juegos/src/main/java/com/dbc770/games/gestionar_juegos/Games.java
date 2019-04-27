package com.dbc770.games.gestionar_juegos;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Games {

    @Id
    public ObjectId _id;

    public String name;
    public String description;
    public String portada;

    // Constructors
    public Games() {}

    public Games(ObjectId _id, String name, String description, String portada) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.portada = portada;
    }




    public String get_id() { return _id.toHexString(); }

    public void setId(ObjectId id) {
        this._id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPortada() {
        return this.portada;
    }

    public void setPortada(String portada) {
        this.portada = portada;
    }


    @Override
    public String toString() {
        return "{" +
            " id='" + get_id() + "'" +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            ", portada='" + getPortada() + "'" +
            "}";
    }
    

    // @Override
    // public String toString() {
    //     return String.format(
    //             "Customer[id=%s, firstName='%s', lastName='%s']",
    //             id, firstName, lastName);
    // }

}