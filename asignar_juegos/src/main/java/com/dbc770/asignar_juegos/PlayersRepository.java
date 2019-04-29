package com.dbc770.asignar_juegos;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "players", path = "players_API_INFO")
public interface PlayersRepository extends MongoRepository<Players, String> {

  
  Players findBy_id(ObjectId _id);
  List<Players> findByDni(String dni);
}