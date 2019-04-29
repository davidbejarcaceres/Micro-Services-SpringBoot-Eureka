package com.dbc770.asignar_juegos;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RepositoryRestResource(collectionResourceRel = "games", path = "games_API_INFO")
public interface GamesRepository extends MongoRepository<Games, String> {

  
  Games findBy_id(ObjectId _id);
  
  public List<Games> findByName(String name);
}