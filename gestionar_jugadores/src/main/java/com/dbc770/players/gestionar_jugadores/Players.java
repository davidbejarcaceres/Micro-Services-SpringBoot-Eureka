package com.dbc770.players.gestionar_jugadores;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "players")
public class Players {

    @Id
    public ObjectId _id;

    public String name;
    public String lastname;
    public String age;
    public String dni;

    @DBRef(db = "micro_services_followers")
    public List<Games> games;

    public List<ObjectId> followers;

    public List<ObjectId> following;



    // Constructors
    public Players() {}


    public Players(ObjectId _id, String name, String lastname, String age, String dni, List<Games> games, List<ObjectId> followers, List<ObjectId> following) {
        this._id = _id;
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.dni = dni;
        this.games = games;
        this.followers = followers;
        this.following = following;
    }


    // Mandatory to convert 
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

    public String getLastname() {
        return this.lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAge() {
        return this.age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getDni() {
        return this.dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public List<Games> getGames() {
        return this.games;
    }

    public void setGames(List<Games> games) {
        this.games = games;
    }


    public List<ObjectId> getFollowers() {
        return this.followers;
    }

    public void setFollowers(List<ObjectId> followers) {
        this.followers = followers;
    }

    public List<ObjectId> getFollowing() {
        return this.following;
    }

    public void setFollowing(List<ObjectId> following) {
        this.following = following;
    }




    @Override
    public String toString() {
        return "{" +
            " _id='" + get_id() + "'" +
            ", name='" + getName() + "'" +
            ", lastname='" + getLastname() + "'" +
            ", age='" + getAge() + "'" +
            ", dni='" + getDni() + "'" +
            ", games='" + getGames() + "'" +
            ", followers='" + getFollowers() + "'" +
            ", following='" + getFollowing() + "'" +
            "}";
    }
}