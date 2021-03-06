package com.dbc770.asignar_seguidores;

import com.dbc770.asignar_seguidores.Models.Players;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "players", path = "players_API_INFO")
public interface PlayersRepository extends MongoRepository<Players, String> {

  Players findBy_id(ObjectId _id);
  Players findByDni(String dni);  
}