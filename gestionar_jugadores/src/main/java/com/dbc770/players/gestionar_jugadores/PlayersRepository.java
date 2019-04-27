package com.dbc770.players.gestionar_jugadores;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "players", path = "players_API_INFO")
public interface PlayersRepository extends MongoRepository<Players, String> {

  Players findBy_id(ObjectId _id);
  public List<Players> findByName(String name);
  List<Players> findByDni(String dni);
}