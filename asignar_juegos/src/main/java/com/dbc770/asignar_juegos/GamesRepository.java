package com.dbc770.asignar_juegos;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RestController;

public interface GamesRepository extends MongoRepository<Games, String> {  
  Games findBy_id(ObjectId _id);
}